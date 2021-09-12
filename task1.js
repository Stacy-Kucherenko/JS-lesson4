let array = [-1, -2, -44, -55, 65, 70, 85, -123, 655, 98, -876, -654, 223, -987, 29, -315, 548, -200, 186, -9765];

function asc (number1, number2){
  return number1-number2;
}

array.sort(asc);
console.log(array);

array.sort(asc).reverse();
console.log(array);

function getPositive (number){
  return number >=0;
}

function getNegative(number){
  return number <0;
}

let positiveNumbersArray = array.filter(getPositive).sort(asc);
console.log(positiveNumbersArray);

let negativeNumbersArray = array.filter(getNegative).sort(asc);
console.log(negativeNumbersArray);