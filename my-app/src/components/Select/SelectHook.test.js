import { render, screen, fireEvent } from '@testing-library/react';
import SelectHook from './SelectHook';

test('SelectHook renders', () => {
  render(<SelectHook items={[]} selected="Toto" onSelected={() => {}} />)
});


test('SelectHook show Toto', () => {
  render(<SelectHook items={[]} selected="Toto" onSelected={() => {}} />);
  expect(screen.getByText('Toto')).toBeTruthy();
});


test('SelectHook menu opens on click', () => {
  render(<SelectHook items={['Toto', 'Titi', 'Tata']} selected="Toto" onSelected={() => {}} />);

  fireEvent.click(screen.getByText('Toto'));

  expect(screen.getByText('Tata')).toBeTruthy();
});

test('SelectHook calls onSelected on click', () => {
  // let callCount = 0;
  // const spy = () => {
  //   callCount++;
  // }
  const spy = jest.fn();
  render(<SelectHook items={['Toto', 'Titi', 'Tata']} selected="Toto" onSelected={spy} />);

  fireEvent.click(screen.getByText('Toto'));
  fireEvent.click(screen.getByText('Tata'));

  // expect(callCount).toBe(1);
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith('Tata');
});

