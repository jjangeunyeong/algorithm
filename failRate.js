// 실패율

function solution1(N, stages) {
  let rate = [];
  let result = [];
  for (let i = 1; i <= N; i++) {
    let fail = 0;
    let pass = 0;
    stages.forEach((stage) => {
      if (stage >= i) pass++;
      if (stage === i) fail++;
    });
    if (pass === 0) rate.push(0); // 분모가 0일 경우 실패율은 0으로 정의
    else rate.push(fail / pass); // 아닐 경우는 계산값 넣기
  }

  let rate_sort = rate.slice();
  rate_sort.sort((a, b) => b - a);
  rate_sort.forEach((e) => {
    rate.map((el, i) => {
      if (el === e && !result.includes(i + 1)) result.push(i + 1);
    });
  });
  return result;
}

console.log("sol1", solution1(5, [2, 1, 2, 6, 2, 4, 3, 3]));

//채점 결과 합계: 74.1 / 100.0
//분모가 0일 경우 실패율은 0 (예외처리 ) -> 문제에 꼼꼼히 확인

// sol2
// stage와 실패율을 한배열에 같이 저장하는 방법
// rate_sort(1단계부터 N단계까지를 크기순으로 저장할 배열)없이 구현

function solution2(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let fail = 0;
    let pass = 0;
    stages.forEach((stage) => {
      if (stage >= i) pass++;
      if (stage === i) fail++;
    });
    // result에 [[stage,실패율],[stage, 실패율] ...] 와 같이 배열을 push
    if (pass === 0) result.push([i, 0]);
    else result.push([i, fail / pass]);
  }

  return result
    .sort((a, b) => b[1] - a[1]) // result의 각 배열 원소에 두번째값 기준으로 내림차순 정렬
    .map((e) => e[0]); // 각 원소의 첫번째값을 return 한 배열
}

console.log("sol2", solution2(5, [2, 1, 2, 6, 2, 4, 3, 3]));
