
import React from 'react';

export default function CardInput({ card, setCard, handleValidate }) {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        value={card}
        onChange={(e) => setCard(e.target.value)}
        placeholder="Enter card number"
        className="px-4 py-2 rounded text-black text-lg focus:outline-none"
      />
      <button
        onClick={handleValidate}
        className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition"
      >
        Validate
      </button>
    </div>
  );
}
