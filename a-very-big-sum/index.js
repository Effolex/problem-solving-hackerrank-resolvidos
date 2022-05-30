// challenge
// https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true

// if using bigint
function aVeryBigSum(ar) {
  const hugeNumber = ar.reduce((acc, number) => BigInt(number)+BigInt(acc))
  return hugeNumber;
}