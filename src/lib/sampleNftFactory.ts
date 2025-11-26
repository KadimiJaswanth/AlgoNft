// sampleNftFactory — generate small sample NFT objects for UI dev
// TODO: replace with real NFT model when integrating real data sources
export const makeSampleNft = (i = 1) => ({ id: String(i), title: `Sample NFT ${i}`, image: `/placeholder.svg` });
