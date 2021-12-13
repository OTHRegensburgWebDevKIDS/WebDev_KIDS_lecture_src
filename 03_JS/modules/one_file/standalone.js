const marge = {
	firstName: "Marge",
	lastName: "Simpson",
	age: 42,

	sayHello() {
		console.log("Hello from me!");
	}
}

const lisa = {
	firstName: "Lisa",
	lastName: "Simpson",
	age: 12,

	sayHello() {
		console.log("Hello from " + this.firstName);
	}
}

marge.sayHello();
lisa.sayHello();