////////////14889 264ms
let min;
let g = [];
let start = [];
let link = [];
let n;

const Start_N_Link = (idx) => {
  if (start.length > n / 2 || link.length > n / 2) {
    return;
  }

  if (idx >= n) {
    let startPower = 0;
    for (let i = 0; i < n / 2; i++) {
      for (let j = i + 1; j < n / 2; j++) {
        startPower += g[start[i]][start[j]];
        startPower += g[start[j]][start[i]];
      }
    }

    let linkPower = 0;
    for (let i = 0; i < n / 2; i++) {
      for (let j = i + 1; j < n / 2; j++) {
        linkPower += g[link[i]][link[j]];
        linkPower += g[link[j]][link[i]];
      }
    }

    if (min > Math.abs(startPower - linkPower)) {
      min = Math.abs(startPower - linkPower);
    }
  }

  start.push(idx);
  Start_N_Link(idx + 1);
  start.pop();

  link.push(idx);
  Start_N_Link(idx + 1);
  link.pop();
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  n = Number(input[0]);

  min = 101 * n;

  for (let i = 1; i <= n; i++) {
    g.push(input[i].split(" ").map(Number));
  }

  Start_N_Link(0);

  console.log(min);
});

// /////14889  1076ms
// const fs_1 = require("fs");
// const source = "/dev/stdin";
// const input = fs_1.readFileSync(source).toString().trim().split("\n");
// const adj = [];
// for (let index = 1; index < input.length; index++) {
//   adj.push(
//     input[index]
//       .trim()
//       .split(" ")
//       .map((v) => Number(v))
//   );
// }
// const solution = (adj) => {
//   const N = adj.length;
//   let answer = Infinity;
//   const sumCapacity = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < N / 2; i++) {
//       for (let j = i + 1; j < N / 2; j++) {
//         sum += adj[arr[i]][arr[j]] + adj[arr[j]][arr[i]];
//       }
//     }
//     return sum;
//   };
//   for (let i = 0; i < 1 << N; i++) {
//     const start = [];
//     for (let j = 0; j < N; j++) {
//       if (i & (1 << j)) {
//         start.push(j);
//       }
//     }
//     if (start.length !== N / 2) {
//       continue;
//     }
//     const link = [...Array(N).keys()].filter((v) => !start.includes(v));
//     const diff = Math.abs(sumCapacity(start) - sumCapacity(link));
//     answer = Math.min(answer, diff);
//   }
//   console.log(answer);
// };
// solution(adj);

// ////14889  364ms
// let firstLine = true;
// let N;
// const S = [];
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// readline.on("line", function (line) {
//   if (firstLine) {
//     N = parseInt(line);
//     firstLine = false;
//   } else {
//     line = line.split(" ").map((element) => parseInt(element));
//     S.push(line);
//   }
// });

// readline.on("close", function () {
//   solve();
//   process.exit();
// });

// function solve() {
//   const team = Array(N).fill(1);
//   team[0] = 2;
//   console.log(findMinimumDifference(team, 1, 1));
// }

// function findMinimumDifference(team, nextSelection, selectCount) {
//   if (selectCount === N / 2) {
//     return Math.abs(computeAbility(team, 1) - computeAbility(team, 2));
//   }
//   let minimumDifference = Number.MAX_VALUE;
//   for (let i = nextSelection; i < N; ++i) {
//     team[i] = 2;
//     const difference = findMinimumDifference(team, i + 1, selectCount + 1);
//     minimumDifference = Math.min(minimumDifference, difference);
//     team[i] = 1;
//   }
//   return minimumDifference;
// }

// function computeAbility(team, teamNumber) {
//   let ability = 0;
//   for (let i = 0; i < N; ++i) {
//     for (let j = i + 1; j < N; ++j) {
//       if (team[i] === teamNumber && team[j] === teamNumber) {
//         ability += S[i][j] + S[j][i];
//       }
//     }
//   }
//   return ability;
// }
