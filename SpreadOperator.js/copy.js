//Spread operator
//...<object name>
//   or
//...<Array name>
//
// it is used to copy properties of one object into another object and it is used to copy elements of one array into another array
//example: applying spread operator for object

var obj1 = {
  name: "virat",
  age: 35,
  city: "mumbai"
}
console.log(obj1)

var obj2 = {
  ...obj1,
  id: 18,
  gender: "male",
  gmail: "virat@gmail.com"
}
console.log(obj2)

var arr1=[10,20,30,40,50]
console.log(arr1)
var arr2=[...arr1,80,90,110]
console.log(arr2)