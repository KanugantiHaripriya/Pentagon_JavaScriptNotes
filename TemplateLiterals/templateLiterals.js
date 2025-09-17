//Template literals
//Template literals provide an easy way to interpolate variables and expressions into strings.
//template literals use back-ticks (``) rather than the quotes ("") to define string

//example:

var name1="Virat"
let age=37
console.log("My name is "+name1+" i am "+age+" years old")
console.log(`My name is ${name1} i am ${age} years old`)

let person={
  fname:"virat",
  lname:"Kholi",
  age:36,
  place:"Mumbai",
  details:function(){
    console.log("Name is "+this.fname+this.lname+" age is "+this.age+" from "+this.place)
    console.log(`Name is ${this.fname}${this.lname} age is ${this.age} from ${this.place}`)
  }
}
person.details()