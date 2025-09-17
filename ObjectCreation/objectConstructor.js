function emp(id,name,salary){
	this.id=id;
	this.name=name;
	this.salary=salary;
}
e = new emp(1,"Hari",49000)
console.log(e.id+" "+e.name+" "+e.salary)