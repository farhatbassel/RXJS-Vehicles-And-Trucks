import { cars$, supplyValues } from '../index';

/*
  4 - Debounced Manufaturers
  -------

  ### Question

  With too much traffic one needs to reduce the incoming number of vehicles.
  Now we handle the stream by removing some of the vehicles.

  Using the cars$ streeam
  Step 1: Only get the 'manufacturer' of the car
  Step 2: Only emit a new value when there hasn't been any activity on the stream for at least 500ms

  ### Hints

  None for this one

  ### Expected Result

  Volvo
  Koenigsegg

*/

/* _____________ Your Code Here _____________ */
const output$ = cars$.pipe();

output$.subscribe((out) => console.log(out));

/* _____________ Do Not Remove _____________ */
supplyValues();
