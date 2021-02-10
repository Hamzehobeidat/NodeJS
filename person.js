// const person = {
//     name : 'Hamzeh',
//     age : 26
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and my age ${this.age}`)
    }
}
module.exports = Person;