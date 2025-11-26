/**
 * Application-wide constants
 */

export const ALGORAND_NETWORKS = {
  MAINNET: 'mainnet',
  TESTNET: 'testnet',
  BETANET: 'betanet',
} as const;

export const CURRENT_NETWORK = ALGORAND_NETWORKS.TESTNET;

export const ALGORAND_NODE_ENDPOINTS = {
  mainnet: 'https://mainnet-api.algonode.cloud',
  testnet: 'https://testnet-api.algonode.cloud',
  betanet: 'https://betanet-api.algonode.cloud',
} as const;

export const ALGORAND_INDEXER_ENDPOINTS = {
  mainnet: 'https://mainnet-idx.algonode.cloud',
  testnet: 'https://testnet-idx.algonode.cloud',
  betanet: 'https://betanet-idx.algonode.cloud',
} as const;

export const MINIMUM_BALANCE = 100000; // microAlgos
export const ASSET_CREATION_COST = 100000; // microAlgos
export const TRANSACTION_FEE = 1000; // microAlgos

export const IPFS_GATEWAY = 'https://ipfs.io/ipfs/';

export const PAGINATION_LIMIT = 20;
export const ITEMS_PER_PAGE = 12;

export const CURRENCY_SYMBOLS = {
  ALGO: 'A',
  USD: '$',
} as const;

export const TOAST_DURATION = 3000; // milliseconds

export const NFT_PLACEHOLDER_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23e5e7eb" width="400" height="400"/%3E%3Ctext x="200" y="200" font-size="24" text-anchor="middle" dominant-baseline="central" fill="%236b7280"%3ENFT%3C/text%3E%3C/svg%3E';

export const WALLET_CONNECT_PROVIDERS = [
  'myalgo',
  'algosigner',
  'walletconnect',
] as const;
