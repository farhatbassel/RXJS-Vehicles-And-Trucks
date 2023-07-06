import { cars$, trucks$, supplyValues } from '../index';

/*
  8 - Which is faster
  -------

  ### Question

  You can say we have a race

  Only emit the results of whoever emits first, if cars$ emits first then the trucks$ should be ignored completely

  ### Hints

  None for this one

  ### Expected Result

  The faster stream should be emitted
*/

/* _____________ Your Code Here _____________ */
const output$ = cars$.pipe();

output$.subscribe((out) => console.log(out));

/* _____________ Do Not Remove _____________ */
supplyValues();
