//프로그래머스 땅따먹기

const solution = (land) => {
  let LENGTH = land.length;
  if (LENGTH === 1) return Math.max(...land[0]);
  for (let i = 1; i < LENGTH; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }
  return Math.max(...land[LENGTH - 1]);
};

//현재 위치 인덱스 다음 인덱스와 달라야 함

const land = [
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
];
// console.log(solution(land));

//프로그래머스 포켓몬
const solution1 = (nums) => {
  let max = nums.length / 2;
  let new_nums = new Set(nums);
  let new_nums_size = new_nums.size;

  return new_nums_size > max ? max : new_nums_size;
};

const nums = [3, 1, 2, 3];
const nums1 = [3, 3, 3, 2, 2, 4];
const nums2 = [3, 3, 3, 2, 2, 2];
// console.log(solution1(nums2));

//프로그래머스 기능개발
const solution2 = (progresses, speeds) => {
  const days = [];
  const answer = [];
  const LENGTH = progresses.length;
  for (let i = 0; i < LENGTH; i++) {
    let last_working = 100 - progresses[i];
    let days_working = Math.ceil(last_working / speeds[i]);
    days.push(days_working);
  }
  //   console.log(days);
  let d = days[0];
  let count = 1;
  for (let j = 1; j < LENGTH; j++) {
    if (d < days[j]) {
      answer.push(count);
      count = 1;
      d = days[j];
    } else {
      count++;
    }

    if (j === LENGTH - 1) {
      answer.push(count);
    }
  }
  //   console.log(answer);
  return answer;
};

// const progresses = [93, 30, 55];
const progresses = [95, 90, 99, 99, 80, 99];
// const speeds = [1, 30, 5];
const speeds = [1, 1, 1, 1, 1, 1];
// solution2(progresses, speeds);

// function solution(progresses, speeds) {
//     let answer = [0];
//     let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
//     let maxDay = days[0];

//     for(let i = 0, j = 0; i< days.length; i++){
//         if(days[i] <= maxDay) {
//             answer[j] += 1;
//         } else {
//             maxDay = days[i];
//             answer[++j] = 1;
//         }
//     }

//     return answer;
// }

////
//프로그래머스 스킬트리
const solution3 = (skill, skill_trees) => {
  let answer = 0;
  let re = new RegExp(`[^${skill}]`, "g");

  const skill_check = (word) => {
    if (word === "") return true;
    if (word === skill) return true;

    let re_skill = new RegExp(`${word}`);
    // console.log(re_skill);
    if (re_skill.test(skill)) {
      if (skill[0] === word[0]) return true;
    }

    return false;
  };

  for (let skill_user of skill_trees) {
    let skill_user_converted = skill_user.replace(re, "");
    // console.log(skill_user_converted);
    if (skill_check(skill_user_converted)) {
      //   console.log(skill_user_converted);
      answer++;
    }
  }

  //   console.log(answer);
  return answer;
};

const skill = "CBD";
const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

// solution3(skill, skill_trees);

function solution4(skill, skill_trees) {
  const skills = skill.split("");
  return skill_trees.filter(
    (tree) =>
      skill.indexOf(
        tree
          .split("")
          .filter((s) => skills.includes(s))
          .join("")
      ) === 0
  ).length;
}
// console.log(solution4(skill, skill_trees));

const testSol = (w, skill) => {
  let skills = skill.split("");
  console.log(skill);
  let s = skill.indexOf(
    w
      .split("")
      .filter((i) => skills.includes(i))
      .join("")
  );

  console.log(s);
};

// testSol("AECB", skill);

//////
//프로그래머스 예상 대진표
const solution5 = (n, a, b) => {
  let count = 0;
  while (true) {
    count++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    if (a === b) break;
  }
  //   console.log(count);
  return count;
};

const n = 8,
  a = 4,
  b = 7;
// solution5(n, a, b);

//
//프로그래머스 숫자의표현
// https://hwan-shell.tistory.com/248
const solution6 = (n) => {
  let LEN = (n + 1) / 2;
  let sum = 0,
    j = 1,
    answer = 1;
  for (let i = 1; i <= LEN; i++) {
    sum += i;
    if (sum >= n) {
      while (sum > n) sum -= j++;
      if (sum === n) answer++;
    }
  }
  console.log(answer);
  return answer;
};

// solution6(15);

//프로그래머스 문자열 압축
const solution7 = (s) => {
  let LENGTH = s.length;
  let answer = s;

  for (let i = 1; i < LENGTH; i++) {
    let answer_str = "";
    let str = "";
    let count = 1;
    let slice_str = "";
    let check_str = "";

    for (let j = 0; j < LENGTH; j += i) {
      check_str = str;
      slice_str = s.slice(j, i + j);
      if (str === slice_str) {
        count++;
      } else {
        if (count > 1) {
          answer_str = answer_str + count;
          count = 1;
        }
        answer_str += str;
        str = slice_str;
      }
      //   console.log(j);
      //   console.log(slice_str);
      //   console.log(answer_str);
      //   console.log(str);
    }

    if (count > 1) {
      answer_str = answer_str + count + str;
    }
    if (str !== check_str) {
      answer_str += str;
    }

    if (answer.length > answer_str.length) {
      answer = answer_str;
    }
    // console.log(answer_str);
    // console.log(i);
  }
  return answer.length;
  //   console.log(answer.length);
  //   console.log(answer);
};

const s = "aabbaccc"; //7
const s1 = "abcabcabcabcdededededede"; //14
const s2 = "abcabcdede"; //8
// solution7(s2);

//
////
//프로그래머스 점프와 순간이동

const solution8 = (n) => {
  let answer = 0;
  let num = n;
  while (num) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      answer++;
      num = (num - 1) / 2;
    }
  }
  return answer;
  //   console.log(answer);
};

const n8 = 5; //2
const n81 = 6; //2
const n82 = 5000; //5
// solution8(n82);

//////////////////////
//프로그래머스 1차뉴스클러스터링
const solution9 = (str1, str2) => {
  const MULTI_NUMBER = 65536;
  let word1 = str1.toLowerCase();
  let word2 = str2.toLowerCase();

  const splited = (word) => {
    let w = "";
    let dic = {};
    let arr = [];
    for (let s = 0; s < word.length - 1; s++) {
      w = word.slice(s, s + 2);
      if (w.length === 2) {
        w = w.replace(/[^a-z]/g, "");
        if (w.length === 2) {
          arr.push(w);
          dic[w] === undefined ? (dic[w] = 1) : (dic[w] += 1);
        }
        w = "";
      }
    }
    console.log(arr, dic);
    return [arr, dic];
  };

  const repeat_push = (n, s, arr) => {
    while (n) {
      n--;
      arr.push(s);
    }
  };
  //합집합
  const union_set = (set1, set2) => {
    let answer = [].concat(set2[0]);
    let key = Object.keys(set1[1]);
    for (let s of key) {
      let n = set1[1][s];
      if (set2[1][s] === undefined) {
        repeat_push(n, s, answer);
      } else {
        if (set2[1][s] < n) {
          repeat_push(n - set2[1][s], s, answer);
        }
      }
    }
    // console.log("합", answer);
    return answer.length;
  };

  //교집합
  const intersection_set = (set1, set2) => {
    let answer = [];
    let key = new Set(set2[0]);
    for (let s of key) {
      let n = set2[1][s];
      if (set1[1][s] !== undefined) {
        if (n > set1[1][s]) {
          repeat_push(set1[1][s], s, answer);
        }
        if (n < set1[1][s]) {
          repeat_push(n, s, answer);
        }
        if (n === set1[1][s]) {
          repeat_push(n, s, answer);
        }
      }
    }
    // console.log("교", answer);
    return answer.length;
  };

  let word1_splited = splited(word1);
  let word2_splited = splited(word2);
  if (word1_splited[0].length === 0 && word2_splited[0].length === 0) {
    return MULTI_NUMBER;
  }
  //   console.log(word1_splited);
  //   console.log(word2_splited);
  let union_set_count = union_set(word1_splited, word2_splited);
  let intersection_set_count = intersection_set(word1_splited, word2_splited);
  //   console.log(intersection_set_count, union_set_count);
  //   console.log((intersection_set_count / union_set_count) * MULTI_NUMBER);
  //   console.log(
  //     Math.floor((intersection_set_count / union_set_count) * MULTI_NUMBER)
  //   );
  return Math.floor((intersection_set_count / union_set_count) * MULTI_NUMBER);
};

const str91 = "FRANCE";
const str92 = "french";

const str93 = "handshake";
const str94 = "shake hands";

const str95 = "aa1+aa2";
const str96 = "AAAA12";

const str97 = "Ee=M*C^2";
const str98 = "e=m*c^2";
solution9(str97, str98);

// function solution (str1, str2) {

//     function explode(text) {
//       const result = [];
//       for (let i = 0; i < text.length - 1; i++) {
//         const node = text.substr(i, 2);
//         if (node.match(/[A-Za-z]{2}/)) {
//           result.push(node.toLowerCase());
//         }
//       }
//       return result;
//     }

//     const arr1 = explode(str1);
//     const arr2 = explode(str2);
//     const set = new Set([...arr1, ...arr2]);
//     let union = 0;
//     let intersection = 0;

//     set.forEach(item => {
//       const has1 = arr1.filter(x => x === item).length;
//       const has2 = arr2.filter(x => x === item).length;
//       union += Math.max(has1, has2);
//       intersection += Math.min(has1, has2);
//     })
//     return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
//   }

//
