// 기능 개발

function solution(progresses, speeds) {
  let remainingDay = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  let answer = [];
  let feat = 1;
  let curDay = remainingDay.shift();

  while (remainingDay.length > 0) {
    if (remainingDay[0] <= curDay) {
      feat++;
      remainingDay.shift();
    } else {
      answer.push(feat);
      curDay = remainingDay.shift();
      feat = 1;
    }
  }
  answer.push(feat);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));

function solution2(progresses, speeds) {
  let remainingDay = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  let answer = [0];
  let answerIdx = 0;
  let curDay = remainingDay[0];

  while (remainingDay.length > 0) {
    if (remainingDay[0] <= curDay) {
      answer[answerIdx] += 1;
      remainingDay.shift();
    } else {
      answer[++answerIdx] = 1;
      curDay = remainingDay.shift();
    }
  }
  return answer;
}

console.log(solution2([93, 30, 55], [1, 30, 5]));
