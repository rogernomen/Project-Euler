(() => {
function fiboEvenSum(n) {
  let fibo = [1];
  let evenSum = 0;
  for (let idx = 1; idx < n; idx++) {
    fibo[idx] = idx === 0 ? 1 : idx === 1 ? 2 : fibo[idx - 1] + fibo[idx - 2];
    if (fibo[idx] % 2 === 0) {
      evenSum += fibo[idx];
    }
  }
  return evenSum;
}

fiboEvenSum(10);
})()
