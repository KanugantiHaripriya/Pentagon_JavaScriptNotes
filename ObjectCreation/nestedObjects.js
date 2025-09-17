
let Person = {
	name: "virat",
	id: 18,
	age: 36,
	address: {
		city: 'Bangalore',
		state: 'karnataka',
		Pincode: 560007,
		area: {
			doorno: 114,
			street: "1st main road",
			location: "vijayanagar",
		}
	}
}

console.log(Person)
console.log(Person.name) // virat
console.log(Person.address.state);
// karnataka
console.log(Person.address.area.doorno)
// 114

// Create (Insert) - Add a new property
Person.phone = "123-456-7890";

// Read (Access) - Access nested property
console.log(Person.address.city);  // Output: Bangalore

// Update - Modify existing property
Person.name = "Virat Kohli";

// Delete - Remove a property
delete Person.address.area.street;

console.log(Person);
