//CRUD Operations
//Create an object
let product={
	pname : "I am an iphone",
	price : 50000,
	stock : true,
	category : "Electronics",
	rating : 4.5
}

console.log(product)

// 1. read or access the data
console.log(product.pname)
console.log(product['rating'])

// 2. modify or update value
product.pname="samsung s24 ultra"
console.log(product)

//insert or add or write new property
product.brand="apple"
product["color"] = "Red"
console.log(product)

//4. delete property or remove
delete product.brand
console.log(product)
delete product['color']
console.log(product)

//To retrieve keys from the object
var keys = Object.keys(product)
console.log(keys)

//To retrieve values from the object
var values=Object.values(product)
console.log(values)

