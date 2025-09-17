/* apply()
The apply function it will take two arguments first argument is object and second argument is array
We can give function arguments inside the array
*/
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

add.apply(obj1, [50,10])
add.apply(obj2, [100, 400])