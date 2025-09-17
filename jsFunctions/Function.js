function greet(){
	return "hello how are you!"
}


let res= greet()
console.log(res)

function add(x,y){
	let z=x+y;
	return z;
}

console.log(add(5,6));

//anynomous
let fun = function () {
  console.log("I am Anonymous")
}
fun(); // Output: I am Anonymous

//parameterized anynomous
let mul= function(x,y){
	let z=x*y;
	console.log(z);
}
mul(10,2);

// return anynomous
let a = function() {
  return "Hello world";
}
console.log(a()); // Output: Hello world

//named arrow function
let func = ()=>{
	console.log("I am arrow function")
}
func();

//parameterized arrow function
let add1 = (a,b) =>{
	console.log(a+b)
}
add1(3,4);

//retrun arraow function
let num=()=>{
	return 500;
}
console.log(num());

//parameterized arrow function
let yes = (a,b) =>	a+b;
console.log(yes(20,40));

//normal IIFE
(function(){
	console.log("Welcome to js class")
})()

//Ascync Function
async function Fun(){
	console.log("Statement-1")
	await (setTimeout(()=>{
		console.log("Statement-2")
	}),4000)
	console.log("Statement-3")
}
Fun()




