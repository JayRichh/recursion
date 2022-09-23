//* Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
function sumRange(num) {
  if (num === 1) return 1; // base case
  return num + sumRange(num - 1); // recursive case
}

console.log(sumRange(3));

//* Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

console.log(power(2, 4));

//* Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5));

//*Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
function all(array, callback) {
  var copy = copy || array.slice();

  if (copy.length === 0) return true;

  if (callback(copy[0])) {
    copy.shift();
    return all(copy, callback);
  } else {
    return false;
  }
}

var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

console.log(allAreLessThanSeven); // false

//* Write a function called productOfArray which takes in an array of numbers and returns the product of them all
function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return arr.shift() * productOfArray(arr);
}

var six = productOfArray([1, 2, 3]); // 6

console.log(six);

//* Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

function contains(obj, value) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], value);
    }

    if (obj[key] === value) {
      return true;
    }
  }
  return false;
}

console.log(contains(nestedObject, 55));

//* Given a multi-dimensional integer array, return the total number of integers stored inside this array
function totalIntegers(array) {
  if (array.length === 0) return 0;

  let total = 0;
  let first = array.shift();

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }

  return total + totalIntegers(array);
}

var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7

console.log(seven);

//* Write a function that sums squares of numbers in list that may contain more lists
function SumSquares(array) {
  if (array.length === 0) return 0;
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += SumSquares(array[i]);
    } else {
      total += array[i] * array[i];
    }
  }
  return total;
}

var l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

//* The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
function replicate(times, number) {
  if (times <= 0) return [];

  return [number].concat(replicate(times - 1, number));
}

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []

//* Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].
function fibs(number) {
  let result = [0, 1];

  for (let i = 2; i < number; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }

  return result;
}

console.log(fibs(1)); // [0]
console.log(fibs(2)); // [0, 1]
console.log(fibs(5)); // [0, 1, 1, 2, 3]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

//* Write a function that takes a string and returns a new string with all vowels removed.
function disemvowel(string) {
  let vowels = "aeiouAEIOU";
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) === -1) {
      result += string[i];
    }
  }
  return result;
}

console.log(disemvowel("foobar")); // fbr
console.log(disemvowel("ruby")); // rby
console.log(disemvowel("aeiou")); // ""

//* Write a function that takes a string and returns true if it is a palindrome, false if it is not. A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Allowances may be made for adjustments to capital letters, punctuation, and word dividers.
function palindrome(string) {
  let reversed = string.split("").reverse().join("");

  return string === reversed;
}

console.log(palindrome("tacocat")); // true
console.log(palindrome("foobar")); // false
console.log(palindrome("amanaplanacanalpanama")); // true
console.log(palindrome("amanaplanacanalpandemonium")); // false