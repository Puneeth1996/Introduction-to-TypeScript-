import { Person } from './person.model';

function add(val1: number, val2: number) {
    return val1 + val2;
}

add(1, 10);

function sayHello(person1: Person , person2: Person) {
    return `Say Hello to My Little Friend, ${person1.firstName}! Hmmmmm ${person2.lastName}`  
}

sayHello(new Person({firstName: 'Dylan'}),new Person({lastName:'abc'}));