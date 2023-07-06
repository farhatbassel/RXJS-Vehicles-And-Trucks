import { cars$, trucks$, supplyValues } from '../index';

/*
  5 - Merging Vehicles
  -------

  ### Question

  Next we start with merging.

  Step 1: Merge all cars with all trucks in 2 different way (don't use the 'merge' operator)
  Step 2: Merge all cars with all trucks while outputing the trucks first.
  Step 3: Trying merging them without using the combineLatest operator.

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
