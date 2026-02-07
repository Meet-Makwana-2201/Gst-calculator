export interface CalculationRecord {
    id: string;
    type: 'add' | 'reverse' | 'remove';
    amount: number;
    gstRate: number;
    gstAmount: number;
    totalAmount: number;
    timestamp: number;
}

const STORAGE_KEY = 'gst_calculation_history';
const MAX_HISTORY = 20;

export const saveCalculation = (calculation: Omit<CalculationRecord, 'id' | 'timestamp'>): void => {
    try {
        const history = getHistory();
        const newRecord: CalculationRecord = {
            ...calculation,
            id: Date.now().toString(),
            timestamp: Date.now(),
        };

        const updatedHistory = [newRecord, ...history].slice(0, MAX_HISTORY);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
    } catch (error) {
        console.error('Failed to save calculation:', error);
    }
};

export const getHistory = (): CalculationRecord[] => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Failed to retrieve history:', error);
        return [];
    }
};

export const clearHistory = (): void => {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('Failed to clear history:', error);
    }
};

export const deleteCalculation = (id: string): void => {
    try {
        const history = getHistory();
        const updatedHistory = history.filter(record => record.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
    } catch (error) {
        console.error('Failed to delete calculation:', error);
    }
};
