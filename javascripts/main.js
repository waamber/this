
// var b = 30;
// let c = 90;


// this.a = 37;
// console.log(window.a);
// console.log(this.b, this.c);

//example 1: call site and call stack
// var fubar = '42';

// function baz() {
//   console.log('baz');
//   bar();
// };

// function bar() {
//   console.log('bar');
//   foo();
// };

// function foo() {
//   var fubar = '13';
//   console.log('foo');
//   console.log('this', this); //logged window 
//   console.log('this', this.fubar); //logged 42 bc fubar is defined in the window
// };

// baz();


//event listener example
var eventFxn = function (e) {
  console.log("e", e);
  console.log('e.target', e.target);
  console.log('this', this);
};

// $('#my-button').click(eventFxn); //jquery click event

document.getElementById('my-button').addEventListener('click', eventFxn);



//example 2: context objects
// var a = 3;

// function foo() {
//   console.log('this', this); //logs obj
//   console.log('this.a', this.a); //logs obj.a
// };

// var obj = {
//   a: 2,
//   monkey: foo
// };

// obj.monkey();


//example 3
// function foo() {
//   console.log('this', this); //logs obj2
//   console.log('this.a', this.a); //logs obj2.a
// };

// var obj2 = {
//   a: 42,
//   foo: foo
// };

// var obj1 = {
//   a: 2,
//   obj2: obj2
// };

// obj1.obj2.foo(); //foo() executes on obj2



//example 4
// function foo() {
//   console.log('this', this);
//   console.log('this.a', this.a);
// };

// var obj = {
//   a: 2,
//   foo: foo
// };

// var bar = obj.foo; //when obj.foo is reassigned it loses 'this' in context of obj
// var a = 'global warming';

// obj.foo();
// bar();



//example 5
function foo() {
  console.log('this', this); //logs window
  console.log('this.a', this.a); //logs 'oops, global warming'
};

function doFoo(fn) {
  return fn();
};

var obj = {
  a: 2,
  foo: foo
};

var a = 'oops, global';

doFoo(obj.foo);
