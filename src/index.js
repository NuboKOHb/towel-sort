
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  if (matrix.length == 0) return [];
  let result = [];
  for (let i = 0; i<matrix.length; i++) {
    if (i % 2 != 0) {
      matrix[i] = matrix[i].reverse();
    }
    for (let j = 0; j<matrix[i].length; j++) {
      result.push(matrix[i][j]);
    }
  }
  return result;
}
/*
let matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
 ];
console.log(towelSort(matrix));
//*/