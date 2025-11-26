// sampleTxFactory — generate mock transactions for UI testing
// TODO: use indexer data for real TXs; client-side only
export const makeSampleTx = (i = 1) => ({ id: `tx${i}`, status: i % 2 === 0 ? 'confirmed' : 'pending' });
