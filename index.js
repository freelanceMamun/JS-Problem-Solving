function additional(a, b) {
  /// white your solutions
  let result = a + b;
  return result;
}
// output resutl
// console.log(additional(10, 20));
// console.log(additional(5, 10));
// console.log(additional(1, 6));

/// No : 2 problem Convert hours into second

function howManaySecond(hours) {
  ///  I've know 1 hours == 3600 second
  // and hours into second
  let second = hours * 3600;
  return second;
}
// console.log(howManaySecond(12));
// console.log(howManaySecond(8));

/// No: 3  problem  Calculates total points of a team from number of wins(3pts), draws(1pt), and losses(0pt).

function footballPoints(wins, draws, losses) {
  let points = wins * 3 + draws * 1 + losses * 0;
  return points;
}

// console.log(footballPoints(4, 3, 1)); // 15
// console.log(footballPoints(10, 5, 0)); // 35
// console.log(footballPoints(11, 0, 9)); // 33

/// No : 4 Write functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

function bitwiseAnd(num1, num2) {
  let result = num1 && num2;
  return result;
}

// bitwise result
// console.log(bitwiseAnd(10, 20));

// bitwiseXOR Or Oparetor

function bitwiseXOR(num1, num2) {
  let result = num1 ^ num2;
  return result;
}

/// result
// console.log(bitwiseXOR(10, 20));

/// no 5 problem create a functions asign Array or return last value
function LastValue(array) {
  let element = array[array.length - 1];
  return element;
}
// console.log(LastValue([1, 5, 6, 8, 9]));

///  no 6 problem create a functions asign Array or return Frist value

function FristValue(array) {
  let result = array.slice(0, 1)[0];
  return result;
}
// console.log(FristValue([1, 5, 6, 8, 9]));
