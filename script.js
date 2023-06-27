// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.greet = function(){
	setTimeout(()=>{
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
	},4000);
		
};

function Employee(name, age, jobTitle) {
	this.name = name;
	this.age = age;
	this.jobTitle = jobTitle;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.jobGreet = function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
