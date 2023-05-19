// 신고 결과 받기

function solution(id_list, report, k) {
  let complaint_num = new Array(id_list.length).fill(0);
  let result = new Array(id_list.length).fill(0);
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

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

console.log(solution(id_list, report, k));

// 시간초과
// set을 이용한 중복 제거로 반복문 줄이기
// 처음 생각했던 방법
// : id_list를 키 값으로 있는 객체를 생성하여 신고받은 횟수, 메일 받은 횟수 저장 -> 반복문이 많아짐
// solution1: 객체를 이용하지 않고, id_list의 index순서를 활용하여 신고받은 횟수 저장, 메일 받을 횟수(결과값) 구하기
