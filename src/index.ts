import { Subject } from 'rxjs';
import { Car } from './types/car.type';
import { Truck } from './types/truck.type';

export const cars$ = new Subject<Car>();
export const trucks$ = new Subject<Truck>();

export function supplyValues() {
  cars$.next({
    id: 'c1', manufacturer: 'BMW', model: 'M5', color: 'red',
  });
  cars$.next({
    id: 'c2', manufacturer: 'Mercedes', model: 'E', color: 'black',
  });
  cars$.next({
    id: 'c3', manufacturer: 'Audi', model: 'RS6', color: 'green',
  });
  cars$.next({
    id: 'c4', manufacturer: 'Citroen', model: 'C4', color: 'black',
  });

  trucks$.next({
    id: 't1', manufacturer: 'MAN', model: 'big', color: 'red',
  });
  trucks$.next({
    id: 't2', manufacturer: 'Mercedes', model: 'bigger', color: 'black',
  });

  cars$.next({
    id: 'c5', manufacturer: 'Peugeot', model: '308', color: 'red',
  });
  cars$.next({
    id: 'c6',
    manufacturer: 'Maserati',
    model: 'GranTurismo',
    color: 'black',
  });
  cars$.next({
    id: 'c7', manufacturer: 'Astin Martin', model: 'DB9', color: 'silver',
  });
  cars$.next({
    id: 'c8', manufacturer: 'Nissan', model: 'Note', color: 'blue',
  });
  cars$.next({
    id: 'c9', manufacturer: 'Opel', model: 'Corsa', color: 'blue',
  });
  cars$.next({
    id: 'c10', manufacturer: 'Ford', model: 'GT', color: 'red',
  });
  cars$.next({
    id: 'c11', manufacturer: 'Volvo', model: 'S90', color: 'silver',
  });

  trucks$.next({
    id: 't3', manufacturer: 'Scania', model: 'biggest', color: 'green',
  });
  trucks$.next({
    id: 't4', manufacturer: 'Renault', model: 'small', color: 'black',
  });
  trucks$.next({
    id: 't5', manufacturer: 'Ford', model: 'smaller', color: 'red',
  });
  trucks$.next({
    id: 't6', manufacturer: 'DAF', model: 'smallest', color: 'black',
  });
  trucks$.next({
    id: 't7', manufacturer: 'Volvo', model: 'swedish', color: 'silver',
  });

  setTimeout(() => {
    cars$.next({
      id: 'c12', manufacturer: 'McLaren', model: 'P1', color: 'blue',
    });
    cars$.next({
      id: 'c13', manufacturer: 'Koenigsegg', model: 'One:1', color: 'blue',
    });
  }, 1000);
}
