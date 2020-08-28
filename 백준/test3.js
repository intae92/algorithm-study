const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

const solution = (input) => {
  const doc = input[0];
  const word = input[1];
  let docLen = doc.length;
  let wordLen = word.length;

  let result = 0;
  let idx = 0;
  while (docLen >= wordLen) {
    let copyDoc = doc.slice(idx);
    let count = copyDoc.split(word).length - 1;
    if (result < count) result = count;
    idx++;
    docLen -= idx;
  }
  console.log(result);
};
