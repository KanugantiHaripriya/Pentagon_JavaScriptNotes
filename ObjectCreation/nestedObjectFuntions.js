let person = {
	name:"Virat",
	age : 36,
	city : "Mumbai",
	play : function(){
		console.log(this.name + " is playing")
	},
	run: function(){
		console.log(this.name+" is running to "+this.city)
	},
	gender:"male"
}

console.log(person)
person.play()
person.run()
