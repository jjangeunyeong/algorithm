// 달리기 경주

function solution(players, callings) {
  callings.map((call) => {
    const idx = players.indexOf(call); //indexOf도 O(n)의 시간복잡도를 가짐
    players.splice(idx, 1);
    players.splice(idx - 1, 0, call);
  }); //O(n제곱)
  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);

// 시간초과
// 객체 생성으로 시간 줄이기

function solution2(players, callings) {
  const idx = {};
  players.map((player, i) => (idx[player] = i));

  callings.map((call) => {
    const tmpIdx = idx[call];
    const changePlayer = players[tmpIdx - 1];

    players[tmpIdx] = changePlayer;
    players[tmpIdx - 1] = call;

    idx[call]--;
    idx[changePlayer]++;
  });
  return players;
}
console.log(
  solution2(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
