
import React from 'react';

export default function ResultDisplay({ isValid, company }) {
  if (isValid === null) return null;

  const className = `mt-6 p-4 rounded text-center text-lg font-semibold ${
    isValid ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
  }`;

  return (
    <div className={className}>
      {isValid ? '✅ Card is valid!' : `❌ Invalid card - Issuer: ${company}`}
    </div>
  );
}
