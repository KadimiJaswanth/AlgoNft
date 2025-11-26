// algorandFormulas — small helper math/formulas for fees and rounding
// TODO: keep calculations client-side and well-documented
export const microAlgosToAlgos = (micro: number) => micro / 1e6;
export const algosToMicroAlgos = (algos: number) => Math.round(algos * 1e6);
