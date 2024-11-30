for (let i = 2; i <= 237; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

function isPrime(num) {
  // פונקציה מקבלת מספר מחזיר אמת אם הוא ראשוני אחרת שקר 
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
