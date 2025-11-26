/**
 * Hook for wallet connection and state management
 */

import { useEffect, useState, useCallback } from 'react';
import { Account, WalletState } from '@/types';
import { connectWallet, disconnectWallet, getConnectedAccount } from '@/services/walletService';
import { getLocalStorageItem, setLocalStorageItem } from '@/utils/storage';

/**
 * Hook to manage wallet connection state
 */
export const useWallet = () => {
  const [wallet, setWallet] = useState<WalletState>({
    isConnected: false,
    address: null,
    account: null,
    loading: true,
    error: null,
  });

  // Check if wallet was previously connected
  useEffect(() => {
    const checkPreviousConnection = async () => {
      try {
        const savedAddress = getLocalStorageItem<string>('wallet_address');
        if (savedAddress) {
          const account = await getConnectedAccount();
          if (account) {
            setWallet({
              isConnected: true,
              address: savedAddress,
              account,
              loading: false,
              error: null,
            });
          }
        } else {
          setWallet((prev) => ({ ...prev, loading: false }));
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to check connection';
        setWallet((prev) => ({
          ...prev,
          loading: false,
          error: errorMessage,
        }));
      }
    };

    checkPreviousConnection();
  }, []);

  const connect = useCallback(
    async (provider: 'myalgo' | 'algosigner' | 'walletconnect' = 'myalgo') => {
      try {
        setWallet((prev) => ({ ...prev, loading: true, error: null }));

        const accounts = await connectWallet(provider);
        if (accounts.length === 0) {
          throw new Error('No accounts found');
        }

        const address = accounts[0];
        const account = await getConnectedAccount();

        setLocalStorageItem('wallet_address', address);
        setLocalStorageItem('wallet_provider', provider);

        setWallet({
          isConnected: true,
          address,
          account,
          loading: false,
          error: null,
        });

        return address;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to connect wallet';
        setWallet((prev) => ({
          ...prev,
          loading: false,
          error: errorMessage,
        }));
        throw error;
      }
    },
    []
  );

  const disconnect = useCallback(async () => {
    try {
      setWallet((prev) => ({ ...prev, loading: true }));
      await disconnectWallet();

      // Clear localStorage
      localStorage.removeItem('wallet_address');
      localStorage.removeItem('wallet_provider');

      setWallet({
        isConnected: false,
        address: null,
        account: null,
        loading: false,
        error: null,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to disconnect';
      setWallet((prev) => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));
    }
  }, []);

  return {
    ...wallet,
    connect,
    disconnect,
  };
};
