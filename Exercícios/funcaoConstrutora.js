let Person = function (
  personName,
  personAge,
  personHasDog,
  personHasCat,
  personAddress
) {
  this.name = personName;
  this.age = personAge;
  this.hasDog = personHasDog;
  this.hasCat = personHasCat;
  this.address = personAddress;
  this.greetings = function (x) {
    return `Hey there ${this.name} welcome to ${x}! How are you today?`;
  };
};

let person1 = new Person("Débora", 35, true, true, "Rua Silva Só");
let person2 = new Person("Liege", 34, false, true, "Rua Botafogo");
let person3 = new Person("Marcela", 36, true, false, "Rua Glória");

console.log(person1);
console.log(person2);
console.log(person3);
console.log("-------------------");
console.log(person1.name, person1.address);
console.log(person2.name, person2.address);
console.log(person3.name, person3.address);
console.log("-------------------");
console.log(person1.greetings("your PetShop"));
console.log(person2.greetings("your PetShop"));
console.log(person3.greetings("your PetShop"));
