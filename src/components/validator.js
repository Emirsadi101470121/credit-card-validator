
export function validateCred(array) {
  let sum = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    let curr = array[i];
    if ((array.length - i) % 2 === 0) {
      curr *= 2;
      if (curr > 9) curr -= 9;
    }
    sum += curr;
  }
  return sum % 10 === 0;
}

export function idInvalidCardCompanies(invalidCards) {
  let companies = [];
  for (let card of invalidCards) {
    let firstDigit = card[0];
    if (firstDigit === 3 && !companies.includes('Amex')) {
      companies.push('Amex');
    } else if (firstDigit === 4 && !companies.includes('Visa')) {
      companies.push('Visa');
    } else if (firstDigit === 5 && !companies.includes('Mastercard')) {
      companies.push('Mastercard');
    } else if (firstDigit === 6 && !companies.includes('Discover')) {
      companies.push('Discover');
    }
  }
  return companies;
}
