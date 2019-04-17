function lastIndexOf (array, value) {
  for (var i = array.length; i >= 0; i = i - 1) {
    if (array[i - 1] == value) {
      return i - 1;
      break;
    } else if (i == 0 && array[i] !== value) {
      return i - 1;
      break;
    }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);