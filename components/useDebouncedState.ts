import { useState, useCallback, useRef } from 'react';

export function useDebouncedState<T>(
  initialValue: T,
  delay: number = 300
): [T, (value: T) => void] {
  const [state, setState] = useState<T>(initialValue);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedSetState = useCallback((value: T) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      setState(value);
    }, delay);
  }, [delay]);

  return [state, debouncedSetState];
}