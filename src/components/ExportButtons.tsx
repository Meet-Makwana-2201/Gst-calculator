'use client';

import { Button } from '@/components/ui/button';

interface ExportButtonsProps {
  amount: number;
  taxAmount: number;
  totalAmount: number;
  rate: number;
  taxType: string;
  currencySymbol: string;
  formatCurrency: (value: number, currency?: 'INR' | 'USD') => string;
  currency: 'INR' | 'USD';
}

export default function ExportButtons({
  amount,
  taxAmount,
  totalAmount,
  rate,
  taxType,
  currencySymbol,
  formatCurrency,
  currency,
}: ExportButtonsProps) {
  const exportToCSV = () => {
    const csvContent = [
      ['Field', 'Value'],
      ['Amount (excluding tax)', formatCurrency(amount, currency)],
      ['Tax Type', taxType === 'GST' ? `GST ${rate}%` : taxType === 'IGST' ? `IGST ${rate}%` : `CGST ${rate/2}% + SGST ${rate/2}%`],
      ['Tax Amount', formatCurrency(taxAmount, currency)],
      ['Total (including tax)', formatCurrency(totalAmount, currency)],
      ['Date', new Date().toLocaleString()],
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gst-calculation-${Date.now()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const exportToExcel = () => {
    // Create a simple HTML table and convert to Excel format
    const html = `
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #6366f1; color: white; }
          </style>
        </head>
        <body>
          <table>
            <tr><th>Field</th><th>Value</th></tr>
            <tr><td>Amount (excluding tax)</td><td>${currencySymbol}${formatCurrency(amount, currency)}</td></tr>
            <tr><td>Tax Type</td><td>${taxType === 'GST' ? `GST ${rate}%` : taxType === 'IGST' ? `IGST ${rate}%` : `CGST ${rate/2}% + SGST ${rate/2}%`}</td></tr>
            <tr><td>Tax Amount</td><td>${currencySymbol}${formatCurrency(taxAmount, currency)}</td></tr>
            <tr><td>Total (including tax)</td><td>${currencySymbol}${formatCurrency(totalAmount, currency)}</td></tr>
            <tr><td>Date</td><td>${new Date().toLocaleString()}</td></tr>
          </table>
        </body>
      </html>
    `;

    const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gst-calculation-${Date.now()}.xls`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const downloadGSTExcelSheet = () => {
    // Create a comprehensive GST calculation sheet template
    const excelTemplate = `
Field,Value
Amount (excluding tax),${currencySymbol}${formatCurrency(amount, currency)}
Tax Type,${taxType === 'GST' ? `GST ${rate}%` : taxType === 'IGST' ? `IGST ${rate}%` : `CGST ${rate/2}% + SGST ${rate/2}%`}
Tax Amount,${currencySymbol}${formatCurrency(taxAmount, currency)}
Total (including tax),${currencySymbol}${formatCurrency(totalAmount, currency)}
Date,${new Date().toLocaleString('en-IN')}

GST Rate Chart:
0%,Essential items
5%,Common household items
12%,Processed foods
18%,Most goods and services
28%,Luxury items
    `.trim();

    const blob = new Blob([excelTemplate], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `GST-Calculation-Sheet-${Date.now()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={exportToCSV}
        variant="outline"
        size="sm"
        className="transition-all hover:scale-105"
        aria-label="Export to CSV"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        CSV
      </Button>
      <Button
        onClick={exportToExcel}
        variant="outline"
        size="sm"
        className="transition-all hover:scale-105"
        aria-label="Export to Excel"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Excel
      </Button>
      <Button
        onClick={downloadGSTExcelSheet}
        variant="outline"
        size="sm"
        className="transition-all hover:scale-105"
        aria-label="Download GST Excel Sheet"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Download Sheet
      </Button>
    </div>
  );
}

