import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/from";
import "rxjs";


interface Person {
    id: number,
    name: string
}



let array: Array<number> = [1, 2, 2, 3, 4, 5, 6, 2, 3, 4];

let persons: Array<Person> = [];

let mockData = (): Person[] => {

    persons.push({ id: 1, name: "Michael Ganesan" });
    persons.push({ id: 2, name: "Lim Kit Siang" });
    persons.push({ id: 3, name: "Christina Campbell" });
    persons.push({ id: 4, name: "Robert Watts" });
    persons.push({ id: 1, name: "Michael Ganesan" });
    persons.push({ id: 5, name: "Mark Pulliam" });
    return (persons);
}

let persons$ = Observable.from(mockData()).distinct(x => x.id);

persons$.subscribe((person: Person) => {
       console.log(`Your data is: ${person.id} ${person.name}`);

});









let mydata$ = Observable.from(array).distinct();

mydata$.subscribe(x => {
    console.log("Next %s", x);
}, (error) => {
    console.log("Error has occurred: %s", error);
}, () => {
    console.log("Completed");
});




