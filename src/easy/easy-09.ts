import { cars$, trucks$, supplyValues } from '../index';

/*
  9 - Logging our Vehicles
  -------

  ### Question

  Logging is very important.

  Log something every 2000ms (the value can be a static value)

  ### Hints

  No hints for this one

  ### Expected Result

  Log whatever you want
*/

/* _____________ Your Code Here _____________ */
const output$ = cars$.pipe();

output$.subscribe((out) => console.log(out));

/* _____________ Do Not Remove _____________ */
supplyValues();
