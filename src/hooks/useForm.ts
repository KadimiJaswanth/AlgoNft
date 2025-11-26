/**
 * Hook for managing form state
 */

import { useState, useCallback } from 'react';

interface UseFormResult<T> {
  values: T;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  setValue: (field: keyof T, value: any) => void;
  setError: (field: string, error: string) => void;
  setTouched: (field: string, touched: boolean) => void;
  resetForm: () => void;
  setValues: (values: T) => void;
}

/**
 * Hook to manage form state and validation
 */
export const useForm = <T extends Record<string, any>>(
  initialValues: T,
  onSubmit?: (values: T) => void | Promise<void>
): UseFormResult<T> => {
  const [values, setValuesState] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouchedState] = useState<Record<string, boolean>>({});

  const setValue = useCallback((field: keyof T, value: any) => {
    setValuesState((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const setError = useCallback((field: string, error: string) => {
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  }, []);

  const setTouched = useCallback((field: string, isTouched: boolean) => {
    setTouchedState((prev) => ({
      ...prev,
      [field]: isTouched,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setValuesState(initialValues);
    setErrors({});
    setTouchedState({});
  }, [initialValues]);

  const setValues = useCallback((newValues: T) => {
    setValuesState(newValues);
  }, []);

  return {
    values,
    errors,
    touched,
    setValue,
    setError,
    setTouched,
    resetForm,
    setValues,
  };
};
