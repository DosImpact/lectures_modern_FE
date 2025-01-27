import Person, { makePerson } from "./person/Person";
import IPerson from "./person/IPerson";

import Chance from "chance";
import * as R from "ramda";

const change = new Chance();
let persons: IPerson[] = R.range(0, 2).map(
  (n: number) => new Person(change.name(), change.age())
);
console.log(persons);

const testMakePerson = (): void => {
  let dos: IPerson = makePerson("dos");
  let dos_2: IPerson = new Person("dos2");
  console.log(dos, dos_2);
};

testMakePerson();
