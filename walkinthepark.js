// 공원 산책

function solution1(park, routes) {
  let x = -1;
  let y = -1;
  const W = park[0].length;
  const H = park.length;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (park[i][j] === "S") {
        x = i;
        y = j;
      }
    }
  }
  routes.forEach((route) => {
    const op = route.split(" ")[0];
    const n = Number(route.split(" ")[1]);

    let go = true;

    let tmpX = x;
    let tmpY = y;

    for (let i = 1; i <= n; i++) {
      if (op === "E") {
        // ! 이동하면 index가 초과되는지 확인 (런타임 에러 해결)
        if (y + 1 >= W) {
          go = false;
          break;
        } else {
          if (park[x][++tmpY] === "X" || y + n >= W) {
            go = false;
            break;
          }
        }
      } else if (op == "W") {
        if (y - 1 < 0) {
          go = false;
          break;
        } else {
          if (park[x][--tmpY] === "X" || y - n < 0) {
            go = false;
            break;
          }
        }
      } else if (op === "S") {
        if (x + 1 >= H) {
          go = false;
          break;
        } else {
          if (park[++tmpX][y] === "X" || x + n >= H) {
            go = false;
            break;
          }
        }
      } else if (op === "N") {
        if (x - 1 < 0) {
          go = false;
          break;
        } else {
          if (park[--tmpX][y] === "X" || x - n < 0) {
            go = false;
            break;
          }
        }
      }
    }

    if (go) {
      if (op === "E") y += n;
      else if (op === "W") y -= n;
      else if (op === "S") x += n;
      else if (op === "N") x -= n;
    }
  });
  return x === H && y === W ? [-1, -1] : [x, y];
}

console.log(solution1(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));

// 구조분해할당으로 코드 줄이기
// dirs 객체(방향에 따른 이동) 선언으로 복잡한 코드 바꾸기
// 실행 시간은 위가 더 짧음

function solution2(park, routes) {
  let [x, y] = [-1, -1];
  const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };

  for (let i = 0; i < park.length; i++) {
    if (park[i].includes("S")) {
      [x, y] = [i, park[i].indexOf("S")];
      break;
    }
  }

  routes.forEach((route) => {
    const [op, n] = route.split(" ");
    let [tmpX, tmpY] = [x, y];
    let go = true;

    for (let i = 1; i <= n; i++) {
      [tmpX, tmpY] = [tmpX + dirs[op][0], tmpY + dirs[op][1]]; // op방향으로 n만큼 이동

      // ? 인덱스 범위를 벗어나는 경우 === NaN, !NaN===true
      if (!park[tmpX] || !park[tmpX][tmpY] || park[tmpX][tmpY] === "X") {
        go = false;
        break;
      }
    }

    if (go) [x, y] = [tmpX, tmpY];
  });
  return [x, y];
}

console.log(solution2(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));

/*
 O S O
 O O O
 O X O
 O O O
*/
