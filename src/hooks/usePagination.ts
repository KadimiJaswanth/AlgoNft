/**
 * Hook for managing pagination state
 */

import { useState, useCallback } from 'react';
import { ITEMS_PER_PAGE } from '@/utils/constants';

interface UsePaginationResult<T> {
  items: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  setItemsPerPage: (count: number) => void;
}

/**
 * Hook to manage pagination of items
 */
export const usePagination = <T,>(
  allItems: T[],
  itemsPerPage: number = ITEMS_PER_PAGE
): UsePaginationResult<T> => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(itemsPerPage);

  const totalItems = allItems.length;
  const totalPages = Math.ceil(totalItems / perPage);

  // Ensure current page is valid
  const validPage = Math.min(currentPage, Math.max(1, totalPages));
  const startIndex = (validPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const items = allItems.slice(startIndex, endIndex);

  const goToPage = useCallback((page: number) => {
    const pageNum = Math.max(1, Math.min(page, totalPages || 1));
    setCurrentPage(pageNum);
  }, [totalPages]);

  const nextPage = useCallback(() => {
    goToPage(validPage + 1);
  }, [validPage, goToPage]);

  const prevPage = useCallback(() => {
    goToPage(validPage - 1);
  }, [validPage, goToPage]);

  const handleSetItemsPerPage = useCallback((count: number) => {
    setPerPage(Math.max(1, count));
    setCurrentPage(1);
  }, []);

  return {
    items,
    currentPage: validPage,
    totalPages: totalPages || 1,
    totalItems,
    itemsPerPage: perPage,
    goToPage,
    nextPage,
    prevPage,
    setItemsPerPage: handleSetItemsPerPage,
  };
};
