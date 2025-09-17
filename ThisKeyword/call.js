//call()
//For this function first argument should be always object name
//For which this keyword is point/is referred second argument is function accepting arguments

var obj1 = {
  c: 100
}

var obj2 = {
  c: 500
}

function add(x, y) {
  let z = x + y + this.c
  console.log(z)
}

add.call(obj1, 200, 400)
add.call(obj2, 100, 400)
