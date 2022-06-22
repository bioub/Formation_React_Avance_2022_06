import { useCallback, useMemo, useState } from 'react';
import Clock from '../../../components/Clock/Clock';
import TodoFormContainer from '../../containers/TodoFormContainer';
import TodoListContainer from '../../containers/TodoListContainer';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

export default function Todos() {
  console.log('Todos renders');

  const [newTodo, setNewTodo] = useState('Acheter du pain');
  // const [todos, setTodos] = useState([
  //   { id: 1, text: 'Introduire les hooks' },
  //   { id: 2, text: 'Optimization' },
  // ]);
  const [todos, setTodos] = useState(
    new Array(2000).fill({}).map(() => ({
      id: Math.random(),
      text: 'A' + Math.floor(Math.random() * 26),
    })),
  );

  function handleNewTodoAdd() {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        text: newTodo,
      },
    ]);
  }

  // const localTodos = useMemo(() => [{id: 1, text: 'ABC'}], [])
  // const handleTodoDelete = useMemo(() => function handleTodoDelete(item) {
  //   setTodos(todos.filter((t) => t.id !== item.id));
  // }, [todos]);

  const handleTodoDelete = useCallback(
    (item) => {
      setTodos(todos.filter((t) => t.id !== item.id));
    },
    [todos],
  );



  return (
    <div className="Todos">
      {/* <TodoFormContainer />
      <TodoListContainer /> */}
      <TodoForm
        newTodoInput={newTodo}
        onNewTodoChange={setNewTodo}
        onNewTodoAdd={handleNewTodoAdd}
      />
      <TodoList
        count={todos.length}
        items={todos}
        onDeleteItem={handleTodoDelete}
      />

      <hr />
      <Clock />
    </div>
  );
}
