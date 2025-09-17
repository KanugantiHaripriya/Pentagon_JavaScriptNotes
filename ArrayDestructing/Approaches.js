//Ex: Array destructuring
let Phones = ["iPhone 14pro", "Samsung S14", "Vivo V24"]

//Old approach
let ele1 = Phones[0]
let ele2 = Phones[1]
let ele3 = Phones[2]
console.log(ele1) //iPhone 14pro

//New approach
const [elem1, elem2, elem3] = Phones
console.log(ele3) //Samsung S14