/**
 * Hook for accessing Algorand client functionality
 */

import { useEffect, useState } from 'react';
import { fetchSuggestedParams } from '@/lib/algorandClient';

export interface SuggestedParams {
  flatFee: boolean;
  fee: number;
  firstRound: number;
  lastRound: number;
  genesisID: string;
  genesisHash: Buffer;
}

interface UseAlgorandClientResult {
  params: SuggestedParams | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Hook to fetch and cache Algorand suggested transaction parameters
 */
export const useAlgorandClient = (): UseAlgorandClientResult => {
  const [params, setParams] = useState<SuggestedParams | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchParams = async () => {
    try {
      setLoading(true);
      setError(null);
      const suggestedParams = await fetchSuggestedParams();
      setParams(suggestedParams as SuggestedParams);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParams();
    // Refresh params every 5 seconds
    const interval = setInterval(fetchParams, 5000);
    return () => clearInterval(interval);
  }, []);

  return { params, loading, error, refetch: fetchParams };
};
