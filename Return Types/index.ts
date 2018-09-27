import { Person } from './person.model';

function add(val1: number, val2: number): number {
    return val1 + val2;
}


/* function add(val1: number, val2: number): {
    return (val1 + val2).toString;
}
*/


function sayHello(person: Person): string {
    return `Say Hello to My Little Friend, ${person.firstName}!`    
}
// here :void --> Is a return type 
function voidExample():void {
    add(1,2);
}
// here :never --> Is a return type that does nothing all the time. 
function neverExample(): never{
    throw Error();
    
    
}