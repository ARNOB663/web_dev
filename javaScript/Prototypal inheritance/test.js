function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function() {

    console.log(this.name);
};
let person1 = new Person('John');
let person2 = new Person('Doe');
person1.sayName();
person2.sayName();