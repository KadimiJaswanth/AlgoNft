// shortIds — tiny short id generator for local mock data
// TODO: use proper UUIDs or CIDs in production; this is client-only
export const shortId = (n = 6) => Math.random().toString(36).slice(2, 2 + n);
