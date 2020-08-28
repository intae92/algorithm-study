const solution = (str) => {
  let target = str.replace(/....$/, "");
  console.log(target + "****");
  console.log(str);
};

const str = "1234567890";

solution(str);

// https://medium.com/@chrisjune_13837/%EC%A0%95%EA%B7%9C%EC%8B%9D-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC-%EC%98%88%EC%A0%9C%EB%A5%BC-%ED%86%B5%ED%95%9C-cheatsheet-%EB%B2%88%EC%97%AD-61c3099cdca8
