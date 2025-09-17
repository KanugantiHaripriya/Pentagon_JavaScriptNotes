// Rest Parameters

// Rest Parameters allow a function to accept an indefinite number of arguments as an array and also it can applied for array or object to store elements or properties

// syntax:
// function myfun(...args){
//    console.log(args)
// }

//example: Rest with other parameters
function greet(greeting, ...names){
  for(let name in names){
    console.log(`${greeting}, ${names[name]}`)
  }
}
greet("hello","Raj","Virat","Riya","Aditya")
