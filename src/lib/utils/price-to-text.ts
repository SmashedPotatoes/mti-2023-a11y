export function priceToText(price: number) {
  const euros = Math.floor(price);
  const cents = Math.round((price % 1) * 100);
  return `${euros} euros${cents !== 0 ? ` and ${cents} cents` : ''}`;
}
