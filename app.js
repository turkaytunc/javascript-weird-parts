function b() {
  console.log(myVar); // 5
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 5;
a();
console.log(myVar); // 5
