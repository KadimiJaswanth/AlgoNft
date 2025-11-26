/**
 * Export all hooks from a single entry point
 */

export { useAlgorandClient } from './useAlgorandClient';
export type { SuggestedParams } from './useAlgorandClient';

export { useWallet } from './useWallet';

export { useFetch } from './useFetch';
export type { UseFetchResult } from './useFetch';

export { useDebounce } from './useDebounce';

export { usePagination } from './usePagination';
export type { UsePaginationResult } from './usePagination';

export { useLocalStorage } from './useLocalStorage';

export { useAsync } from './useAsync';
export type { UseAsyncResult } from './useAsync';

export { useToast } from './useToast';
export type { Toast, ToastType } from './useToast';

export { useOutsideClick } from './useOutsideClick';

export {
  useMediaQuery,
  useIsSmall,
  useIsMedium,
  useIsLarge,
  useIsXLarge,
  useIsMobile,
  useIsDesktop,
} from './useMediaQuery';

export { useForm } from './useForm';
export type { UseFormResult } from './useForm';
