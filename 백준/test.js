////// 14889번
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line.split(" ").map((v) => parseInt(v)));
}).on("close", function () {
  solution(input);
  process.exit();
});

//팀 나누기
//각 팀 추출해서 힘 구하기
//두팀 총 힘의 차이 최소값 구하기
const solution = (input) => {
  const caseCount = input.shift()[0];
  const people = [];
  for (let i = 0; i < caseCount; i++) {
    people.push(i);
  }

  let teamA,
    twoFromA = [],
    minValue = Infinity,
    teamB,
    twoFromB = [];

  //  사람수의 절반으로 팀을 나눠 올수 있는 한쪽 팀 명단
  //  혹은 배열 길이에 따라 순열 수

  const permutor = (array, count) => {
    let result = [];
    let len = count || array.length;
    const permute = (arr, m = []) => {
      if (m.length === len / 2) {
        result.push(m);
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.splice(i), m.concat(next));
        }
      }
    };
    permute(array);
    return result;
  };

  teamA = permutor(people);

  const otherTeam = (arr) => {
    let result = [];
    for (let a of arr) {
      let newArr = [];
      for (let n of people) {
        if (a.indexOf(n) === -1) newArr.push(n);
      }
      result.push(newArr);
    }
    return result;
  };
  teamB = otherTeam(teamA);
  // console.log("teamA", teamA);
  // console.log("teamB", teamB);

  const stats = (part_of_a_team) => {
    //나눈 팀들의 능력치의 합 더하기
    let team = part_of_a_team;
    // let result = [];
    let sum = 0;
    for (let row = 0; row < team.length; row++) {
      let r = team[row][0],
        c = team[row][1];

      sum += input[r][c] + input[c][r];
    }

    return sum;
  };
  for (let i = 0; i < teamA.length; i++) {
    // const permuted = permutor(teamA[i], 4);
    twoFromA.push(stats(permutor(teamA[i], 4)));

    // const permuted = permutor(teamB[i], 4);
    twoFromB.push(stats(permutor(teamB[i], 4)));
  }

  // console.log(teamA);
  // console.log("tA", twoFromA);
  // console.log("tB", twoFromB);
  let temp = [];
  for (let i = 0; i < twoFromA.length; i++) {
    let div = Math.abs(twoFromA[i] - twoFromB[i]);
    temp.push(div);
    if (div < minValue) minValue = div;
  }
  // console.log("temp", temp);
  // console.log("답", minValue);
  return console.log(minValue);
};

////////

//(1, 2, 4, 5), (3, 6, 7, 8)
//0,1,3,4  2,5,6,7

//(1, 3, 6), (2, 4, 5)
//0,2,5  1,3,4

// const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
// const n = Number(input[0]);
// const array = [];

// for (var i = 1; i <= n; i++) {
//   var item = input[i].split(" ");
//   array.push([Number(item[0]), item[1], i]);
// }
// console.log(array);

// 7
// 5 aaa
// 4 b
// 5 abd

// 2 bb
// 1 c
// 1 a
// 9 v

/* 666 1666 2666 3666 4666 5666 6660 6661 6662 6663 6664 6665 6666 6667 
6668 6669 7666 8666 9666 10666 11666 12666 13666 14666 
15666 16660 16661 16662 */
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

// let num = Number(input);

// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

// const countingSort = (array, k) => {
//   const count = [],
//     result = [];
//   for (let i = 0; i <= k; i++) {
//     count[i] = 0;
//   }
//   console.log("1", count, result, array.length);
//   for (let j = 0; j < array.length; j++) {
//     count[array[j]] += 1;
//   }
//   console.log("2", count, result, k);
//   for (let i = 0; i < k; i++) {
//     count[i + 1] += count[i];
//   }
//   console.log("3", count, result, array);
//   for (let j = 0; j < array.length; j++) {
//     result[count[array[j]] - 1] = array[j];
//     console.log(j, result);
//     count[array[j]] -= 1;
//     console.log(j, count);
//   }
//   console.log("4", count, result);
//   return result;
// };

// console.log(countingSort([3, 4, 0, 1, 2, 4, 2, 4], 4));

//---
//////14888
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// rl.on("line", function (line) {
//   input.push(line.split(" ").map((v) => parseInt(v)));
// }).on("close", function () {
//   solution(input);
//   process.exit();
// });

// const solution = (input) => {
//   // console.log(input);
//   const caseCount = input[0][0];
//   const numbers = input[1];
//   const OPERATOR = ["+", "-", "*", "/"]; //연산자
//   let operatorSet = [];
//   let operatorSetPermute = [];
//   const operation = {
//     "+": function (a, b) {
//       return a + b;
//     },
//     "-": function (a, b) {
//       return a - b;
//     },
//     "*": function (a, b) {
//       return a * b;
//     },
//     "/": function (a, b) {
//       if (a < 0 && b > 0) {
//         return Math.floor((a * -1) / b) * -1;
//       } else {
//         return Math.floor(a / b);
//       }
//     },
//   };

//   let max = 0,
//     min = Infinity;

//   for (let o in input[2]) {
//     let idx = parseInt(o);
//     let repeatCount = input[2][idx];
//     if (repeatCount !== 0) {
//       operatorSet = operatorSet.concat(
//         OPERATOR[idx].repeat(repeatCount).split("")
//       );
//     }
//   }
//   // console.log(operatorSet);

//   const permutator = (inputArr) => {
//     let result = [];
//     const permute = (arr, m = []) => {
//       if (arr.length === 0) {
//         result.push(m);
//       } else {
//         for (let i = 0; i < arr.length; i++) {
//           let curr = arr.slice();
//           let next = curr.splice(i, 1);
//           permute(curr.slice(), m.concat(next));
//         }
//       }
//     };
//     permute(inputArr);
//     return result;
//   };
//   operatorSetPermute = permutator(operatorSet);

//   const compare = (num) => {
//     if (max <= num) max = num;
//     if (min >= num) min = num;
//     return;
//   };
//   // console.log(operatorSetPermute);
//   for (let arr of operatorSetPermute) {
//     let a = numbers[0];
//     let num;
//     for (let i = 0; i < caseCount - 1; i++) {
//       let b = numbers[i + 1];
//       let operator = arr[i];
//       num = operation[operator](a, b);
//       // console.log(num);
//       a = num;
//     }
//     compare(num);
//   }
//   // console.log("max min", max, min);
//   return console.log(`${max}\n${min}`);
// };
