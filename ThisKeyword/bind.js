//bind()

//syntax:
// let fnName = <fnname>.bind(object_name)
// fnName()

//the bind function will return same function
//by changing the reference of this keyword

//where as call() and apply() will not return any function

//example

var obj1 = {
  c: 100
}
var obj2 = {
  c: 500
}

function add(x, y){
  let z = x + y + this.c
  console.log(z)
}

let fnadd = add.bind(obj1)
fnadd(10, 10)

let fnadd1 = add.bind(obj2, 30, 50)
fnadd1()

add.bind(obj1, 5, 5)()
add.bind(obj2, 10, 10)()
