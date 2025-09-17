//Example 1: accessing the variable of its own scope.
function Outer(){
  console.log("I am outer function")
  function inner() {
    console.log("I am inner function")
    let name = "virat"
    console.log(name)
  }
  return inner
}
let y = Outer()
y()
// I am outer function
// I am inner function
// virat

//Ex: Accessing the variable of the outer function inside inner function.
function Outer() {
  let name = "Raj"
  console.log("I am outer")
  function inner() {
    console.log("I am inner")
    console.log(name)
  }
  return inner
}
let z = Outer()
z()
//O/p:-
// I am outer
// I am inner
// Raj

//Example: Accessing the global variable inside inner and outer function.
var age = 40
function Outer(){
  console.log("Outer")
  console.log(age)
  function inner() {
    console.log("inner")
    console.log(age)
  }
  return inner
}
let r = Outer()
r()
//O/p:-
// Outer
// 40
// inner
// 40