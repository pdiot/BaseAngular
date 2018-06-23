import {Continent} from './continent.enum';

export class Panda {
  constructor(public id: number,
              public name: string,
              public continent: Continent,
              public age: number) {}
}
