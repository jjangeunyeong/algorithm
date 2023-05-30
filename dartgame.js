// [1차] 다트 게임

/*
  solution1
  정확성: 93.8
  합계: 93.8 / 100.0
*/
function solution1(dartResult) {
  let pass = 0;
  let preScore = 0;
  let answer = 0;
  let curScore = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "*" || dartResult[i] === "#") {
      continue;
    } else if (
      dartResult[i] === "S" ||
      dartResult[i] === "D" ||
      dartResult[i] === "T"
    ) {
      pass > 1 ? (curScore = 10) : (curScore = Number(dartResult[i - 1]));
      pass = 0;

      if (curScore === 0) {
        preScore = 0;
        continue;
      }

      if (dartResult[i] === "D") curScore = Math.pow(curScore, 2);
      else if (dartResult[i] === "T") curScore = Math.pow(curScore, 3);

      if (i + 1 < dartResult.length) {
        if (dartResult[i + 1] === "*") {
          answer = answer + preScore + curScore * 2;
          preScore = curScore * 2;
          continue;
        } else if (dartResult[i + 1] === "#") {
          answer = answer - curScore;
          preScore = -curScore;
          continue;
        }
      }

      answer += curScore;
      preScore = curScore;
    } else {
      pass++;
      continue;
    }
  }
  return answer;
}

console.log(solution1("1S2D*3T"));

// solition2: 스택을 활용한 방법

function solution2(dartResult) {
  let tmp = 0;
  let score = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i + 1] == 0) {
        tmp = 10;
        i++;
      } else tmp = Number(dartResult[i]);
    } else if (dartResult[i] === "S") score.push(tmp);
    else if (dartResult[i] === "D") score.push(Math.pow(tmp, 2));
    else if (dartResult[i] === "T") score.push(Math.pow(tmp, 3));
    else if (dartResult[i] === "*") {
      if (score.length >= 2) score[score.length - 2] *= 2;
      score[score.length - 1] *= 2;
    } else if (dartResult[i] === "#") score[score.length - 1] *= -1;
  }
  console.log(score);
  return score.reduce((sum, cur) => sum + cur, 0);
}

console.log(solution2("1D2S#10S"));
