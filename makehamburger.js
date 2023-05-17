function solution1(ingredient) {
  let result = 0;

  function makehamburger(idx, status, pre) {
    if (idx === ingredient.length || ingredient.length < 4) {
      //console.log("return", idx);
      return result;
    }

    if (ingredient[idx] === 1 && status === "proceeding") {
      //console.log("1단계");
      makehamburger(idx + 1, "proceeding", ingredient[idx]);
    } else if (ingredient[idx] === 2 && status === "proceeding" && pre === 1) {
      //console.log("2단계");
      makehamburger(idx + 1, "proceeding", ingredient[idx]);
    } else if (ingredient[idx] === 3 && status === "proceeding" && pre === 2) {
      //console.log("3단계");
      makehamburger(idx + 1, "done", ingredient[idx]);
    } else if (ingredient[idx] === 1 && pre === 3 && status === "done") {
      result += 1;
      //console.log("완성", result);
      ingredient.splice(idx - 3, 4);
      if (ingredient.length - idx >= 4) makehamburger(idx + 1, "proceeding", 0);
      else makehamburger(0, "proceeding", 0);
    } else {
      //console.log("처음으로");
      makehamburger(idx + 1, "proceeding", 0);
    }
  }

  makehamburger(0, "proceeding", 0);
  return result;
}

ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
console.log(solution1(ingredient));

//solution1런타임 에러

// !pop()을 이용한 방법
function solution2(ingredient) {
  let store = [];
  let result = 0;

  for (let i = 0; i < ingredient.length; i++) {
    let len = store.push(ingredient[i]); //push는 헤당 배열의 현재 길이를 반환

    if (len >= 4) {
      if (
        store[len - 4] === 1 &&
        store[len - 3] === 2 &&
        store[len - 2] === 3 &&
        store[len - 1] === 1
      ) {
        console.log("done");
        store.pop();
        store.pop();
        store.pop();
        store.pop();
        // store.splice(-4)로 코드를 줄일 수 있음
        result += 1;
      }
    }
  }

  return result;
}
console.log(solution2(ingredient));

//slice 와 splice의 차이
//slice는 원본 배열은 수정되지 않고 새로운 배열객체를 반환한다.
//splice는 기존 요소를 삭제 또는 교체하여 원본 배열 자체를 변경한다.
