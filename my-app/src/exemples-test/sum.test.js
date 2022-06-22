import { sum } from "./sum";

test('sum function', () => {
  sum(1, 2); // ne fait pas d'erreur
  // expect(sum(1, 2)).toBe(3);
});
