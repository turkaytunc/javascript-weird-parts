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

let logPersonName = logName.bind(person); //binding this keyword
logPersonName('en');

logName.call(person, 'en', 'es'); //binds this keyword to given object and calls function
logName.apply(person, ['en', 'es']); //same as call but takes arguments as an array
