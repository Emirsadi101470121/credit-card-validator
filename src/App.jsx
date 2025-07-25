
import React, { useState } from 'react';
import CardInput from './components/CardInput';
import ResultDisplay from './components/ResultDisplay';
import { validateCred, idInvalidCardCompanies } from './components/validator';

export default function App() {
  const [card, setCard] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [company, setCompany] = useState('');

  const handleValidate = () => {
    const digits = card.split('').map(Number).filter(n => !isNaN(n));
    const valid = validateCred(digits);
    setIsValid(valid);
    setCompany(valid ? 'Valid Card' : idInvalidCardCompanies([digits])[0] || 'Unknown');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-800 to-black text-white">
      <div className="bg-white/10 p-8 rounded-xl backdrop-blur shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">💳 Credit Card Validator</h1>
        <CardInput card={card} setCard={setCard} handleValidate={handleValidate} />
        <ResultDisplay isValid={isValid} company={company} />
      </div>
    </div>
  );
}
