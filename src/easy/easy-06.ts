import { cars$, trucks$, supplyValues } from '../index';

/*
  6 - More merging
  -------

  ### Question

  Merging is fun right?

  1) Combine all cars with all trucks in 2 different ways(don't use the 'merge' operator)
  2) Combine all trucks with all the cars, with all the trucks first.
  3) Trying merging them without using the combineLatest operator.

  ### Hints

  None for this one

  ### Expected Result

  Both streams to be printed out. Too long to be added here.

*/

/* _____________ Your Code Here _____________ */
const output$ = cars$.pipe();

output$.subscribe((out) => console.log(out));

/* _____________ Do Not Remove _____________ */
supplyValues();
