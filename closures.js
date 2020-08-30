function buildFunction() {
  let arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}

let bf = buildFunction();

bf[0]();
bf[1]();
bf[2]();
