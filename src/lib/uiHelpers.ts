// uiHelpers — small UI utility helpers
// TODO: keep UI helpers pure and client-side only
export const truncate = (s: string, n = 10) => s.length > n ? s.slice(0, n) + '…' : s;
