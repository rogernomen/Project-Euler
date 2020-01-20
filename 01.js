(() => {

const inputNumber = 1000;

const multiplesOf3and5 = (number) => {
  let result = 0;
  for (let idx = 0; idx < number; idx ++) {
    result = idx % 3 === 0 || idx % 5 === 0 ? result + idx : result;
  }

  return result;
}

console.log('result', multiplesOf3and5(inputNumber));
  
})();


