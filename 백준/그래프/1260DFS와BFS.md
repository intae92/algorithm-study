[node.js 백준 1260번 DFS와BFS](https://www.acmicpc.net/problem/1260)

---

```javascript
const input = [];
const garph = {};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  input.push(line.trim().split(" ").map(Number));
});
rl.on("close", function () {
  const caseArr = input[0];
  const N = caseArr[0];
  const M = caseArr[1];
  let start = caseArr[2];

  let newArr = input.slice(1);
  for (let arr of newArr) {
    garph[arr[0]] === undefined
      ? (garph[arr[0]] = [arr[1]])
      : (garph[arr[0]] = garph[arr[0]].concat(arr[1]));
    garph[arr[1]] === undefined
      ? (garph[arr[1]] = [arr[0]])
      : (garph[arr[1]] = garph[arr[1]].concat(arr[0]));
  }
  // console.log(garph);

  dfs(garph, start);
  bfs(garph, start);
  return;
});

const dfs = (graph, start) => {
  let visited = [];
  let stack = [start];

  while (stack.length !== 0) {
    let n = stack.pop();
    if (!visited.includes(n)) {
      visited.push(n);
      if (graph[n] !== undefined) {
        let sub = graph[n].filter((x) => !visited.includes(x));
        sub.sort((a, b) => b - a);
        for (let i of sub) {
          stack.push(i);
        }
      }
    }
    if (stack.length === 0) break;
  }
  // console.log(visited);
  return console.log(visited.join(" "));
};
const bfs = (graph, start) => {
  let visited = [];
  let stack = [start];

  while (stack.length !== 0) {
    let n = stack.shift();
    if (!visited.includes(n)) {
      visited.push(n);
      if (graph[n] !== undefined) {
        let sub = graph[n].filter((x) => !visited.includes(x));
        sub.sort((a, b) => a - b);
        for (let i of sub) {
          stack.push(i);
        }
      }
    }
    if (stack.length === 0) break;
  }

  return console.log(visited.join(" "));
};
```

- 메모리: 171608KB
- 시간: 284ms
- 언어: node.js
- 코드길이: 1774B

## 풀이

dfs는 스택
bfs는 queue

---

## 문제

- 시간제한: 2초
- 메모리제한: 128MB

그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.

---

## 입력

첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다. 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.

---

## 출력

첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.

```
입력
4 5 1
1 2
1 3
1 4
2 4
3 4

출력
1 2 4 3
1 2 3 4


입력
1000 1 1
999 1000

출력
1
1
```
