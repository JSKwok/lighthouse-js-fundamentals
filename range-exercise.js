function range(start, end, step) {
  var range_array = [];
  if (start == undefined || end == undefined || step == undefined || start > end || step < 0) {
    return range_array;
  } else {
    for (var i = start; i <= end; i += step) {
      range_array.push(i);
    }
    return range_array;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));