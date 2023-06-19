import MathCharacter from '../mathcharacter';

test('дистанция равна 0', () => {
  const testChar = new MathCharacter();
  testChar.distance = 0;
  testChar.getAttack();
  expect(testChar.attack).toBe(10);
});

test('отсутствие влияния дурмана на силу урона', () => {
  const testChar = new MathCharacter();
  testChar.distance = 2;
  testChar.stoned = false;
  testChar.getAttack();
  expect(testChar.attack).toBe(9);
});

test('влияние дурмана на силу урона', () => {
  const testChar = new MathCharacter();
  testChar.distance = 2;
  testChar.setAttack(100);
  testChar.setStoned(true);
  testChar.getAttack();
  expect(testChar.attack).toBe(85);
});

test('уровень атаки >=0', () => {
  const testChar = new MathCharacter();
  testChar.attack = 3;
  testChar.distance = 3;
  testChar.stoned = true;
  testChar.getAttack();
  expect(testChar.attack).toBe(0);
});

test('установить значение атаки', () => {
  const testChar = new MathCharacter();
  testChar.setAttack(30);
  expect(testChar.attack).toBe(30);
});

test('вернуть значение дурмана', () => {
  const testChar = new MathCharacter();
  expect(testChar.gevStoned()).toBe(false);
});

test('влияние дурмана', () => {
  const testChar = new MathCharacter();
  testChar.setStoned(true);
  expect(testChar.stoned).toBe(true);
});
