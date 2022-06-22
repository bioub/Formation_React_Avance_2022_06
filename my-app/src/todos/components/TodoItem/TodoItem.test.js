import { render, screen, fireEvent } from '@testing-library/react'
import TodoItem from './TodoItem'

test('TodoItem renders', () => {
  render(<TodoItem item={{}} />);
})

test('TodoItem shows todo text', () => {
  render(<TodoItem item={{text: 'abc'}} />);
  expect(screen.getByText('abc')).toBeTruthy();
})

test('TodoItem calls onDeleteItem', () => {
  const spy = jest.fn();
  render(<TodoItem item={{text: 'abc'}} onDeleteItem={spy} />);

  fireEvent.click(screen.getByRole('button'))

  expect(spy).toHaveBeenCalledWith({text: 'abc'});
})
