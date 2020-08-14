function a() {
  function b() {
    console.log(myVar); // 2
  }
  var myVar = 2;
  b();
}

var myVar = 5;
a();
console.log(myVar); // 5
