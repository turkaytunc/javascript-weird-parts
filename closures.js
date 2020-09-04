// let hide = (function hide() {
//   let name = 'bilal';
//   let count = 0;

//   return function () {
//     name = name + ' ' + count++;
//     return name;
//   };
// })();

// console.log(hide());

let bf = (function () {
  let name = 'bilal';
  let surname = 'ERDOGAN';

  let nameObj = {
    get fullName() {
      return name + ' ' + surname;
    },
  };

  return nameObj;
})();

console.log(bf.fullName);
