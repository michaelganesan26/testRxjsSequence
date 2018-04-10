
/* ===========================
   Description: Use group by to create filters for data sets
   Date: 04/05/2018
   Notes: Filter the data using group by and pipe
 
   =========================== */


import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import * as _ from 'lodash';

interface IPerson {
  name: string;
  age: number;


}


const people = [
  { name: 'Sue', age: 25 },
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 25 },
  { name: 'Sarah', age: 35 }
];
//emit each person
const source = from(people);
//group by age
const example = source.pipe(
  groupBy(person => person.age),
  // return each item in group as array
  mergeMap(group => group.pipe(toArray()))
);


/*
  output:
  [{age: 25, name: "Sue"},{age: 25, name: "Frank"}]
  [{age: 30, name: "Joe"}]
  [{age: 35, name: "Sarah"}]
*/

let filterByAge = (age: number, group: IPerson[]): IPerson[] => {

  return _.filter(group, (person: IPerson) => { return person.age === age });
}

const filterAge: number = 35;

const subscribe = example.subscribe(val => {

  let persons = filterByAge(filterAge, val);
  if (persons.length > 0) {
    console.log(persons);

  }

}
);
