/**This is a special keyword in js which point to the current value of the object
We can change the reference of ‘this’ keyword using three predefined functions. They are
1.	call
2.	apply
3.	bind*/

let person = {
	fname:'hari',
	lname:'priya',
	age:21,
	place:'hyderabad',
	details : function(){
		console.log(`name is ${this.fname+this.lname} age is ${this.personage}`)
		// this keyword is used to invoke current value from the object
	}
}
person.details()
