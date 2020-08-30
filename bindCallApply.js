let person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function () {
    let fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  },
};

let logName = function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('-----------');
};

let logPersonName = logName.bind(person); //binding this keyword, returns copy of function.
logPersonName('en');

logName.call(person, 'en', 'es'); //binds this keyword to given object and calls function
logName.apply(person, ['en', 'es']); //same as call but takes arguments as an array

//IIFE
(function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('-----------');
}.apply(person, ['es', 'en']));

// function borrowing
var person2 = {
  firstname: 'Jane',
  lastname: 'Doe',
};

console.log(person.getFullName.apply(person2)); //borrowed person object's getFullName function. Property names must match, in this case person and person2 objects have firstName and lastName

// function currying
function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));
