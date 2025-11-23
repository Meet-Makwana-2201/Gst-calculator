'use client';

import React, { useState, useEffect } from 'react';
import { getHistory, clearHistory, deleteCalculation, type CalculationRecord } from '@/lib/calculation-history';
import { Clock, Trash2, X, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CalculationHistoryProps {
    onRestore?: (calculation: CalculationRecord) => void;
}

export default function CalculationHistory({ onRestore }: CalculationHistoryProps) {
    const [history, setHistory] = useState<CalculationRecord[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = () => {
        setHistory(getHistory());
    };

    const handleClearAll = () => {
        if (confirm('Are you sure you want to clear all history?')) {
            clearHistory();
            setHistory([]);
        }
    };

    const handleDelete = (id: string) => {
        deleteCalculation(id);
        loadHistory();
    };

    const handleRestore = (calculation: CalculationRecord) => {
        if (onRestore) {
            onRestore(calculation);
            setIsOpen(false);
        }
    };

    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;
        return date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
    };

    if (history.length === 0) {
        return null;
    }

    return (
        <div className="mt-6">
            <Button
                variant="outline"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between"
            >
                <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Calculation History ({history.length})
                </span>
                <span className="text-xs text-gray-500">{isOpen ? 'Hide' : 'Show'}</span>
            </Button>

            {isOpen && (
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">Recent Calculations</h3>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleClearAll}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Clear All
                        </Button>
                    </div>

                    <div className="space-y-2 max-h-96 overflow-y-auto">
                        {history.map((record) => (
                            <div
                                key={record.id}
                                className="p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors cursor-pointer group"
                                onClick={() => handleRestore(record)}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            {record.type === 'add' ? (
                                                <TrendingUp className="w-4 h-4 text-green-600" />
                                            ) : (
                                                <TrendingDown className="w-4 h-4 text-purple-600" />
                                            )}
                                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                {record.type === 'add' ? 'Add GST' : 'Reverse GST'}
                                            </span>
                                            <span className="text-xs text-gray-500">{record.gstRate}%</span>
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            ₹{record.amount.toFixed(2)} → ₹{record.totalAmount.toFixed(2)}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-1">{formatDate(record.timestamp)}</div>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelete(record.id);
                                        }}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
                                    >
                                        <X className="w-4 h-4 text-red-600" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-xs text-gray-500 mt-3 text-center">
                        Click on any calculation to restore it
                    </p>
                </div>
            )}
        </div>
    );
}
