/**
 * Formatting utilities for display values
 */

import { CURRENCY_SYMBOLS } from './constants';

/**
 * Format microAlgos to Algos
 * @param microAlgos - Amount in microAlgos
 * @param decimals - Number of decimal places to show (default 2)
 * @returns Formatted amount with ALGO symbol
 */
export const formatAlgo = (microAlgos: number, decimals: number = 2): string => {
  const algos = microAlgos / 1_000_000;
  return `${algos.toFixed(decimals)} ${CURRENCY_SYMBOLS.ALGO}`;
};

/**
 * Format amount without symbol
 * @param microAlgos - Amount in microAlgos
 * @param decimals - Number of decimal places (default 2)
 * @returns Formatted amount
 */
export const formatAmount = (microAlgos: number, decimals: number = 2): string => {
  const algos = microAlgos / 1_000_000;
  return algos.toFixed(decimals);
};

/**
 * Format address (shortened)
 * @param address - Full Algorand address
 * @param chars - Number of characters to show from start and end (default 6)
 * @returns Shortened address like "AAAAA...BBBBB"
 */
export const formatAddress = (address: string, chars: number = 6): string => {
  if (!address || address.length <= chars * 2 + 2) return address;
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};

/**
 * Format transaction hash (shortened)
 * @param hash - Full transaction hash
 * @param chars - Number of characters to show from start and end (default 8)
 * @returns Shortened hash
 */
export const formatHash = (hash: string, chars: number = 8): string => {
  if (!hash || hash.length <= chars * 2 + 2) return hash;
  return `${hash.slice(0, chars)}...${hash.slice(-chars)}`;
};

/**
 * Format date
 * @param timestamp - Timestamp in seconds
 * @returns Formatted date string
 */
export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

/**
 * Format time
 * @param timestamp - Timestamp in seconds
 * @returns Formatted time string
 */
export const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Format date and time
 * @param timestamp - Timestamp in seconds
 * @returns Formatted date and time string
 */
export const formatDateTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Format large numbers with commas
 * @param num - Number to format
 * @returns Formatted number string
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Format percentage
 * @param value - Decimal value (e.g., 0.15 for 15%)
 * @param decimals - Number of decimal places (default 2)
 * @returns Formatted percentage string
 */
export const formatPercent = (value: number, decimals: number = 2): string => {
  return `${(value * 100).toFixed(decimals)}%`;
};

/**
 * Format asset amount with decimals
 * @param amount - Raw amount
 * @param decimals - Number of asset decimals
 * @returns Formatted amount
 */
export const formatAssetAmount = (amount: number, decimals: number): string => {
  const formatted = (amount / Math.pow(10, decimals)).toFixed(decimals);
  return formatted;
};

/**
 * Truncate string
 * @param str - String to truncate
 * @param maxLength - Maximum length (default 50)
 * @returns Truncated string with ellipsis
 */
export const truncateString = (str: string, maxLength: number = 50): string => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
};

/**
 * Format file size
 * @param bytes - Size in bytes
 * @returns Formatted file size
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};
