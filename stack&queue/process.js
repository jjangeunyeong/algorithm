// 프로세스

function solution(priorities, location) {
  let idx = [];
  let answer = 0;

  for (let i = 0; i < priorities.length; i++) {
    idx.push(i);
  }

  let max = Math.max(...priorities);
  while (priorities.length > 0) {
    max = Math.max(...priorities);

    if (priorities[0] < max) {
      priorities.push(priorities.shift());
      idx.push(idx.shift());
    } else {
      answer++;
      priorities.shift();
      if (idx.shift() === location) return answer;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
