// 오픈채팅방
function solution(record) {
  let user = {}; //ID, name
  let result = [];

  record.forEach((e) => {
    const [status, id, name] = e.split(" ");
    if (status === "Enter" || status === "Change") {
      user[id] = name;
    }
  });

  record.forEach((e) => {
    const [status, id] = e.split(" ");
    const findName = user[id];

    if (status === "Enter") {
      result.push(`${findName}님이 들어왔습니다.`);
    } else if (status === "Leave") {
      result.push(`${findName}님이 나갔습니다.`);
    }
  });

  return result;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
