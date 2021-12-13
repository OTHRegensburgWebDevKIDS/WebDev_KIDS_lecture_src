const lisa = {
	firstName: "Lisa",
	lastName: "Simpson",
	age: 12,

	sayHello() {
		console.log("Hello from " + this.firstName);
	}
}

module.exports = lisa;
