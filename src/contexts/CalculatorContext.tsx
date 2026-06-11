import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { CalculatorContextType } from '../types';

export const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

const HISTORY_STORAGE_KEY = 'history';

interface CalculatorProviderProps {
  children: ReactNode;
}

export function CalculatorProvider({ children }: CalculatorProviderProps) {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem(HISTORY_STORAGE_KEY);
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  function updateHistory(operation: string, parsedResult: string) {
    setHistory((prev) => {
      const updatedHistory = [...prev, `${operation}=${parsedResult}`];
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  }

  return (
    <CalculatorContext.Provider value={{ history, updateHistory }}>
      {children}
    </CalculatorContext.Provider>
  );
}