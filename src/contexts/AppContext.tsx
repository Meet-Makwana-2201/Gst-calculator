'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Currency = 'INR' | 'USD';
type TaxType = 'GST' | 'IGST' | 'CGST_SGST';

interface AppContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  taxType: TaxType;
  setTaxType: (type: TaxType) => void;
  currencySymbol: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>('INR');
  const [taxType, setTaxTypeState] = useState<TaxType>('GST');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCurrency = localStorage.getItem('currency') as Currency | null;
      const savedTaxType = localStorage.getItem('taxType') as TaxType | null;
      if (savedCurrency) setCurrencyState(savedCurrency);
      if (savedTaxType) setTaxTypeState(savedTaxType);
    }
  }, []);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    if (typeof window !== 'undefined') {
      localStorage.setItem('currency', newCurrency);
    }
  };

  const setTaxType = (newType: TaxType) => {
    setTaxTypeState(newType);
    if (typeof window !== 'undefined') {
      localStorage.setItem('taxType', newType);
    }
  };

  const currencySymbol = currency === 'INR' ? '₹' : '$';

  return (
    <AppContext.Provider value={{ currency, setCurrency, taxType, setTaxType, currencySymbol }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}

