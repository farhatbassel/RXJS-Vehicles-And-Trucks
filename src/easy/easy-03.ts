import { cars$, supplyValues } from '../index';

/*
  3 - Only Blue allowed
  -------

  ### Question

  With too much traffic one needs to reduce the incoming number of vehicles.
  Now we handle the stream by removing some of the vehicles.

  Using the cars$ streeam
  Step 1: Only get the cars with the 'color' blue
  Step 2: Delay the emission of the values by 500ms

  ### Hints

  You might need to use a concatMap

  ### Expected Result

  { id: 'c4', manufacturer: 'Citroen', model: 'C4', color: 'black' }
  { id: 'c5', manufacturer: 'Peugeot', model: '308', color: 'red' }
  { id: 'c6', manufacturer: 'Maserati', model: 'GranTurismo', color: 'black'}
  { id: 'c7', manufacturer: 'Astin Martin', model: 'DB9', color: 'silver'}
  { id: 'c8', manufacturer: 'Nissan', model: 'Note', color: 'blue' }

*/

/* _____________ Your Code Here _____________ */
const output$ = cars$.pipe();

output$.subscribe((out) => console.log(out));

/* _____________ Do Not Remove _____________ */
supplyValues();
