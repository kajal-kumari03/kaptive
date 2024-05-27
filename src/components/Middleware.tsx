// App.tsx
import React, { useState } from 'react';
import './Middleware.css';

const Middleware: React.FC = () => {
  const [viewMode, setViewMode] = useState<string>('decimal');
  const [periodFrom, setPeriodFrom] = useState<string>('2022-01-01');
  const [periodTo, setPeriodTo] = useState<string>('2022-12-31');
  const [currency, setCurrency] = useState<string>('euro');

  return (
    <div className="container">
      <h1>Cashflow Summary-1</h1>
      <div className="toolbar">
        <div className="view">
          <label htmlFor="decimalView">Decimal View</label>
          <input
            type="radio"
            id="decimalView"
            name="viewMode"
            value="decimal"
            checked={viewMode === 'decimal'}
            onChange={() => setViewMode('decimal')}
          />
        </div>
        <div className="view">
          <label htmlFor="percentView">Percent View</label>
          <input
            type="radio"
            id="percentView"
            name="viewMode"
            value="percent"
            checked={viewMode === 'percent'}
            onChange={() => setViewMode('percent')}
          />
        </div>
        <div className="period">
          <label htmlFor="periodFrom">Period From</label>
          <input
            type="date"
            id="periodFrom"
            value={periodFrom}
            onChange={(e) => setPeriodFrom(e.target.value)}
          />
          <label htmlFor="periodTo">To</label>
          <input
            type="date"
            id="periodTo"
            value={periodTo}
            onChange={(e) => setPeriodTo(e.target.value)}
          />
        </div>
        <div className="settings">
          <label htmlFor="currencyView">EURO</label>
          <select
            id="currencyView"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="euro">EURO</option>
            <option value="usd">USD</option>
            <option value="gbp">GBP</option>
          </select>
        </div>
      </div>
      {/* Add more content here */}
    </div>
  );
};

export default Middleware;
