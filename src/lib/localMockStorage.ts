// localMockStorage — simple client-side storage for dev mocks
// TODO: only use for development and testing; do not store secrets
export const localMockSet = (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value));
export const localMockGet = (key: string) => { try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch { return null; } };
