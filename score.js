//추억점수

function solution(name, yearning, photo) {
  result = [];
  photo.map((e) => {
    let sum = 0;
    e.map((en) => {
      if (name.indexOf(en) !== -1) {
        sum += yearning[name.indexOf(en)];
      }
    });
    result.push(sum);
  });
  return result;
}

name = ["may", "kein", "kain", "radi"];
yearning = [5, 10, 1, 3];
photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

console.log("sol1", solution(name, yearning, photo));

// solution2 map->reduce로 변환, sum을 선언할 필요없이 reduce로 계산한 결과를 바로 return
// ? null operator(??): 왼쪽 표현식이 null 또는 undefined인 경우, 오른쪽 표현식의 결과를 반환

function solution2(name, yearning, photo) {
  return (result = photo.map((e) => {
    e.reduce((sum, cur) => (sum += yearning[name.indexOf(cur)] ?? 0), 0);
  }));
}

console.log("sol2", solution2(name, yearning, photo));

/*
! solution2가 실행되지 않는 이유 
(sol2의 실행 결과 : sol2 [ undefined, undefined, undefined ])

? {} 로 묶으면 {}로 묶인 코드 전체가 리턴값이 되기 때문에 한줄에 작성하는 것과 리턴값의 의미가 달라진다. 

? {} 없으면 reduce의 리턴값을 넣겠다는 의미
*/

function solution2_2(name, yearning, photo) {
  return (result = photo.map((e) =>
    e.reduce((sum, cur) => (sum += yearning[name.indexOf(cur)] ?? 0), 0)
  ));
}

console.log("sol2_2", solution2_2(name, yearning, photo));
