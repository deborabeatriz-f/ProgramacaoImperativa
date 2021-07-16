let person1 = {
  name: "Débora",
  age: 35,
  hasDog: true,
  hasCat: false,
  speak: function () {
    return "Hey there!";
  },
};

let person2 = {
  name: "Helena",
  age: 30,
  hasDog: true,
  hasCat: false,
  speakHi: function () {
    return "Hi there!";
  },
};

let person3 = {
  name: "Clarissa",
  age: 32,
  hasDog: false,
  hasCat: true,
  speakBye: function () {
    return "Bye!";
  },
};

console.log(person1.speak());
console.log(person2.speakHi());
console.log(person3.speakBye());
