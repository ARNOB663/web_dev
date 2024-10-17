const person={


    name:"John",
    greet()
    {
        console.log("Hello "+ this.name);
    }
};
person.greet();
const friend={name:"David"};
person.greet.call(friend);
person.greet.apply(friend);
const newGreet=person.greet.bind(friend);
newGreet();
 const newGreet2=person.greet.bind(friend);
    newGreet2();
    