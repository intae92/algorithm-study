계수정렬(Counting Sort)

---

계수정렬은 시작 복잡도 O(n + k) 입니다.
만약 k 가 n 보다 작은 수이면 O(n)이 되지만, k가 n보다 매우 큰수 이면 O(무한)이 될 수도 있습니다.
즉 정렬할 수들의 최대값에 영향을 받는 알고리즘 입니다.

매우 빠른 시간 복잡도를 가질수 있지만 엄청난 메모리 낭비를 야기할수 있습니다.
예를 들어 [10,1,2,3,100] 배열에 Countin Sort알고리즘으로 정렬하기 위해서는 배열의 길이를 100으로 잡는 낭비를 하기 때문입니다.
따라서 적은 범위 이거나 혹은 범위를 지정 해주거나 해야 합니다.
그리고 대표적으로 26개의 알파벳으로 이루어진 문자열에서 접미사 배열을 정렬 할때 쓰입니다.

아래 소스코드를 예시로 들면
모든 숫자의 개수를 센후, 누적 합을 구하고 인덱스에 맞춰 다시 숫자를 넣어줍니다.

1. [3,4,0,1,2,4,2,4], [개수를 저장할 공간], [결과]
2. [3,4,0,1,2,4,2,4], [0,0,0,0,0], [결과]
3. [3,4,0,1,2,4,2,4], [1,1,2,1,3], [결과]
4. [3,4,0,1,2,4,2,4], [1,2,4,5,8], [결과]
5. [3,4,0,1,2,4,2,4], [1,2,4,5,8], [0,1,2,2,3,4,4,4]

---

```javascript
const countingSort = (array, k) => {
  const count = [],
    result = [];
  for (let i = 0; i <= k; i++) {
    //모든 숫자의 개수 0으로 초기화
    count[i] = 0;
  }
  for (let j = 0; j < array.length; j++) {
    //숫자의 개수를 세어 저장
    count[array[j]] += 1;
  }

  for (let i = 0; i < k; i++) {
    //누적합 구하기
    count[i + 1] += count[i];
  }

  for (let j = 0; j < array.length; j++) {
    //누적합이 가리키는 인덱스를 바탕으로 결과에 숫자를 집어 넣기
    result[count[array[j]] - 1] = array[j];
    count[array[j]] -= 1;
  }
  return result;
};

console.log(countingSort([3, 4, 0, 1, 2, 4, 2, 4], 4));
```

---

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  solution(input);
  process.exit();
});

const solution = (input) => {
  const caseCount = input.shift();
  const count = [],
    result = [];
  const min = Math.min(...input),
    max = Math.max(...input);

  for (let i = 0; i < max; i++) {
    count[i] = 0;
  }

  for (let j = 0; j < caseCount; j++) {
    count[input[j] - min] += 1;
  }

  for (let i = 0; i < max - 1; i++) {
    count[i + 1] += count[i];
  }
  // console.log(count);

  for (let j = 0; j < caseCount; j++) {
    result[count[input[j] - 1]] = input[j];
    count[input[j] - 1] -= 1;
  }
  if (min !== 0) result.splice(0, min);
  // console.log(result);

  let answer = "";
  for (let n of result) {
    answer += `${n}\n`;
  }
  return console.log(answer);
};
```
