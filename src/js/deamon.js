import MathCharacter from './mathcharacter';

export default class Deamon extends MathCharacter {
  constructor(name, type = 'Deamon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
