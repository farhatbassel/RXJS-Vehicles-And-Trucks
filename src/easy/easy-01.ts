import { cars$, supplyValues } from '../index';

/*
  1 - Different Colors
  -------

  ### Question

  Starting with an easy one.

  Using the cars$ stream.

  Step 1: Only get cars that have the 'color' black or red
  Step 2: Only get the 'color' of the car
  Step 3: Only emit a new value when the value is different from the previous one

  ### Hints

  None for this one

  ### Expected Result

  red
  black
  red
  black
  red

*/

/* _____________ Your Code Here _____________ */
const ouput$ = cars$.pipe();

ouput$.subscribe((car) => console.log(car));

/* _____________ Do Not Remove _____________ */
supplyValues();
