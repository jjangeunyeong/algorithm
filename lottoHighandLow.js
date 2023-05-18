//로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  let erase_num = 0;
  let same_num = 0;
  let result = [];

  lottos.map((lotto) => {
    if (lotto === 0) erase_num += 1;
    const match_idx = win_nums.indexOf(lotto);
    if (match_idx !== -1) same_num += 1;
  });

  if (erase_num > 0) {
    if (same_num + erase_num < 2) result = [6, 6];
    else {
      result.push(7 - same_num - erase_num); //최고순위
      //최저순위
      if (same_num < 2) result.push(6);
      else result.push(7 - same_num);
    }
  } else {
    const rank = 7 - same_num;
    if (same_num < 2) result = [6, 6];
    else result = [rank, rank];
  }
  //if-else문으로 erase_num이 있는 경우와 없는 경우를 나눴는데 필요없음, 계산방법 같음

  return result;
}

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];
console.log(solution(lottos, win_nums));

// 삼항연산자로 lottos.map()부분을 간략한 코드로 수정 가능
// rank=[6,6,5,4,3,2,1]를 미리 선언하여 복잡한 if-else문을 줄일 수 있음
// includes를 활용하여 해당원소를 가지고 있는 여부를 boolean 값으로 얻기

function solution2(lottos, win_nums) {
  let erase_num = 0;
  let same_num = 0;
  const rank = [6, 6, 5, 4, 3, 2, 1];

  lottos.forEach((lotto) =>
    lotto === 0 ? erase_num++ : win_nums.includes(lotto) ? same_num++ : null
  );

  //최고순위, 최저순위
  return [rank[same_num + erase_num], rank[same_num]];
}

console.log(solution2(lottos, win_nums));
