function convertDigit(digitIndex) {
  const romanArray = ["I", "V", "X", "L", "C", "D", "M"];
  return (number) => {
    switch (number) {
      case '0':
        return "";
      case '1':
        return romanArray[digitIndex];
      case '2':
        return romanArray[digitIndex] + romanArray[digitIndex];
      case '3':
        return romanArray[digitIndex] + romanArray[digitIndex] + romanArray[digitIndex];
      case '4':
        return romanArray[digitIndex] + romanArray[digitIndex+1];
      case '5':
        return romanArray[digitIndex+1];
      case '6':
        return romanArray[digitIndex+1] + romanArray[digitIndex];
      case '7':
        return romanArray[digitIndex+1] + romanArray[digitIndex] + romanArray[digitIndex];
      case '8':
        return romanArray[digitIndex+1] + romanArray[digitIndex] + romanArray[digitIndex] + romanArray[digitIndex];
      case '9':
        return romanArray[digitIndex] + romanArray[digitIndex+2];
    }
  }
}

// create closures
const ones = convertDigit(0);
const tens = convertDigit(2);
const hundreds = convertDigit(4);
const thousands = convertDigit(6);

//wrapper to sanitize input
function romanConverter(number)
{
  if (typeof number !== 'number' || number !== number || number === Infinity || number === -Infinity) {
    return "Cannot convert a non-number";
  }

  if (number > 3999) {
    return "Numbers higher than 3999 cannot be converted to Roman Numerals.";
  }

  if (number === 0) {
    return "Roman Numerals don't account for zero";
  }

  if (number < 0) {
    return "Cannot convert negative numbers!"
  }

  return romanRecurse(number);
}

//recursive function
function romanRecurse(number) {
  let numberString;  
  if (number instanceof String) {
    numberString = number;
  } else {
    numberString = number.toString();
  }

  if (numberString.length === 4) {
    return thousands(numberString[0]) + romanRecurse(numberString.substring(1, 4));
  } else if (numberString.length === 3){
    return hundreds(numberString[0]) + romanRecurse(numberString.substring(1, 3));
  } else if (numberString.length === 2) {
    return tens(numberString[0]) + romanRecurse(numberString.substring(1, 2));
  } else if (numberString.length === 1) {
    return ones(numberString[0]);
  }
}

console.log(romanConverter(165));