import { cars$, trucks$, supplyValues } from '../index';

/*
  7 - Even more merging
  -------

  ### Question

  Last merge promse.

  Step 1: Only get the cars by make Ford and Volvo
  Step 2: Merge the trucks into the cars stream and make sure only the trucks of the same brand as the cars will be in the stream output

  ### Hints

  Take a look at mergeMap and switchMap, only the trucks should be returned

  ### Expected Result

  { id: 't7', manufacturer: 'Volvo', model: 'swedish', color: 'silver' }
*/

/* _____________ Your Code Here _____________ */
const output$ = cars$.pipe();

output$.subscribe((out) => console.log(out));

/* _____________ Do Not Remove _____________ */
supplyValues();
