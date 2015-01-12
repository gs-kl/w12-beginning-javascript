// 1

var person = {
  firstName: "John",
  lastName: "Doe",
  age: 36,
  address: "1234 Park Street",
};

person["address"] = "1234 Park ln";
console.log(person);


// 2

var person = function (firstName, lastName, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.address = address;
}

people = [];

people.push(new person("Moe", "Doe", 31, "1234 Park st."));
people.push(new person("Larry", "Doe", 36, "1234 Spark st."));

console.log(people);
