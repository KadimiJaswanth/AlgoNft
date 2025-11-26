// useMockTxs — returns mock transaction data for development
// TODO: swap with real indexer queries when needed; keep client-side
export const useMockTxs = () => {
  return [{ id: 'tx1', status: 'confirmed' }, { id: 'tx2', status: 'pending' }] as any;
};
