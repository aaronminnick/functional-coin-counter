//setup function
function findPrimes(input) {
  const array = Array.from({length: (input - 1)}, (_, i) => 2 + i);
  const primes = recurse(array);
  return `prime numbers less than ${input} are ${primes}`;
}

//recursive function
function recurse(array, index = 0) {
  if (index === array.length -1) {
    return array;
  }
  else {
    const filtered = array.filter(e => e % array[index] > 0 || e === array[index]);
    return recurse(filtered, index+1);
  }
}