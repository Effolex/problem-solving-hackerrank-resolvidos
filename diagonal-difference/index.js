// challenge
// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

/*
for getting the left, I know that to  be the left in an squared matrix
both column and line indexes need to be identical
so to be in the left diagonal 
column == line

but to get the right diagonal, the sum of the indexes need to be equal
the length of the column or line (since it's a square matrix)
so to be in the right diagonal
column + line = the length of the column or line - 1
the - 1 is because indexes use 0 as the starting point;
*/

function diagonalDifference(arr) {
  let leftDiagSum = 0;
  let rightDiagSum = 0;
  let line = arr.length - 1;
  for (let column = 0; column < arr.length ; column += 1) {
      leftDiagSum += arr[column][column];
      rightDiagSum += arr[column][line];
      line -= 1;
  }
  return Math.abs(leftDiagSum - rightDiagSum);
}