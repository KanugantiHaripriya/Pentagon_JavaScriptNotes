//Basic Arithmetic operator

let pos = 4;
let neg = -4;

console.log(2+2); // 4
console.log(2-3); // -1
console.log(pos-neg); // 8
console.log(pos+neg); // 0
console.log(pos*2); // 8
console.log(20/10); // 2
console.log(20%10);// 0


//increment and decrement
console.log("increment and decrement")
var a=10
a++
console.log(a) // 11
a--
console.log(a) // 10

//type conversion with numbers and strings
console.log("Type conversions")
console.log(1+"3") //number+"string"=("string")
console.log(1-"3") // "3" becomes number
console.log("1"*3) //3
console.log("1"+3) //13
console.log("1"-3) //-2

//complex conversion chains
console.log("complex conversions")
console.log(1+"1"+2+2+"3") //11223
console.log(1+1+"3") //23
console.log("3"+1+1+"2") //3112
console.log("10"-"4"-"3"-2+"5") //15

//unique and interesting conversion cases
console.log("unique and interesting conversion cases")
console.log("5"*[]) //0
console.log("5"*[2]) //10
console.log("5"*[2,3]) //NaN
console.log(null+1) // 1
console.log(undefined+1) //NaN
console.log(true+1) // 2
console.log(false+1) // 1
