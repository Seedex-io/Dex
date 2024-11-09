export const getPourcentageChangeBetweenTwoNumbers = (oldNumber: number, newNumber: number) => {
  oldNumber = Number(oldNumber);
  newNumber = Number(newNumber);

  if (!oldNumber || !newNumber) {
    return 0;
  }

  if (oldNumber === 0) {
    return 0;
  }

  const change = newNumber - oldNumber;
  return (change / oldNumber) * 100;
};
