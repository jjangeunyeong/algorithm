// 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  result = arr.sort((a, b) => a - b).filter((e) => e % divisor === 0);
  return result.length <= 0 ? [-1] : result;
}

console.log(solution([[3, 2, 6]], 10));
