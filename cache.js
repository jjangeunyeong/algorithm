// 캐시

function solution(cacheSize, cities) {
  let cache = [];
  let runtime = 0;
  if (cacheSize === 0) return cities.length * 5;
  cities.forEach((city) => {
    city = city.toLowerCase();
    if (cache.length < cacheSize) {
      // ? cache가 다 채워지지 않았는데 해당 city가 이미 존재하는 경우에도 cache miss가 된다.
      cache.push(city);
      runtime += 5;
    } else {
      if (cache.includes(city)) {
        const idx = cache.indexOf(city);
        cache.splice(idx, 1);
        cache.push(city);
        runtime += 1;
      } else {
        cache.shift();
        cache.push(city);
        runtime += 5;
      }
    }
  });
  return runtime;
}

console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));

/*
solution1 (37m)
정확성: 70.0
합계: 70.0 / 100.0

!예외
* cacheSize가 0일 때
*/

function solution2(cacheSize, cities) {
  let cache = [];
  let runtime = 0;

  if (cacheSize === 0) return cities.length * 5;

  cities.forEach((city) => {
    city = city.toLowerCase();
    if (cache.includes(city)) {
      const idx = cache.indexOf(city);
      cache.splice(idx, 1);
      cache.push(city);
      runtime += 1;
    } else {
      if (cache.length >= cacheSize) cache.shift();
      cache.push(city);
      runtime += 5;
    }
  });
  return runtime;
}

console.log(solution2(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));
