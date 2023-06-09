// 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
  let time = 0,
    bridge = [[0, 0]], // [트럭무게, 나갈 시간]
    sumWeight = 0; // 다리 위 트럭무게 합

  while (bridge.length > 0 || truck_weights.length > 0) {
    // ? 현재 시간이, 다리 맨 앞의 차의 '나갈 시간'과 같으면 내보내기
    if (bridge[0][1] === time) sumWeight -= bridge.shift()[0];

    if (sumWeight + truck_weights[0] <= weight) {
      sumWeight += truck_weights[0];
      bridge.push([truck_weights.shift(), time + bridge_length]);
    } else {
      // ? 최대 무게를 초과했을 때 앞에 트럭이 빠질 수 있도록 시간을 옮겨준다.
      // * if 밖에서 time++하기 때문에 -1 해줌
      if (bridge[0]) time = bridge[0][1] - 1;
    }

    // 시간 업데이트 해준다.
    time++;
  }
  return time;
}
console.log(solution(100, 10, [10]));
