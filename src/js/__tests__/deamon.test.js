import Deamon from '../deamon';

test('расчитать силу урона', () => {
  const deamon = new Deamon();
  deamon.attack = 100;
  deamon.distance = 3;
  deamon.stoned = true;
  deamon.getAttack();
  expect(deamon.attack).toBe(72);
});
