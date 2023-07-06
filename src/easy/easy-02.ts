import { cars$, supplyValues } from '../index';

/*
  2 - Handeling Traffic
  -------

  ### Question

  With too much traffic one needs to reduce the incoming number of vehicles.
  Now we handle the stream by removing some of the vehicles.

  Using the cars$ streeam
  Step 1: Skip the first 3 cars in the stream
  Step 2: Take the next 5 cars, and ignore the rest

  ### Hints

  None for this one

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
