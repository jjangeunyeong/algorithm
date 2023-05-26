// 신고 결과 받기

/*
처음 생각했던 방법
: id_list를 키 값으로 있는 객체를 생성하여 신고받은 횟수, 메일 받은 횟수 저장 -> 반복문이 많아짐
(시간초과)

->
? solution1: id_list의 이름 순서를 활용하여 신고받은 횟수 저장, 메일 받을 횟수(결과값) 구하기
*/

function solution(id_list, report, k) {
  let complaint_num = new Array(id_list.length).fill(0);
  let result = new Array(id_list.length).fill(0);
  // ? set을 이용한 배열 요소의 중복 제거
  let dupReport = [...new Set(report)];

  //유저가 신고받은 횟수
  dupReport.forEach((e) => complaint_num[id_list.indexOf(e.split(" ")[1])]++);

  //신고받은 횟수가 k이상인 유저를 신고하여 받은 메일개수
  dupReport.forEach((e) => {
    const idA = e.split(" ")[0]; //신고한 ID, mail받을 ID
    const idB = e.split(" ")[1]; //신고받은 ID

    if (complaint_num[id_list.indexOf(idB)] >= k) {
      result[id_list.indexOf(idA)]++;
    }
  });

  return result;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

// solution2: Map을 활용한 풀이
// ? new Map() : 키(key)-값(value) 쌍인 요소를 가진 반복 가능 객체 생성
// ? key를 사용해서 value를 set, get 할 수 있음

function solution2(id_list, report, k) {
  let reports = [...new Set(report)].map((e) => {
    return e.split(" "); //report 원소를 ['muzi','frodo']의 형태로 변환하여 저장
  });

  let counts = new Map();

  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1); // ? 둘다 true일 때 앞의 값을 반환
  }

  let success = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      success.set(report[0], success.get(report[0]) + 1 || 1);
    }
  }
  return id_list.map((id) => success.get(id) || 0);
}

console.log(
  solution2(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
