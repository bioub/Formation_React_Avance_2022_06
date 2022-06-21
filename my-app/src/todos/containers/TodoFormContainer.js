// import { connect } from 'react-redux';

import { todoAdd, todoChange } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from '../components/TodoForm/TodoForm';
import { selectTodosInput } from '../selectors';

// function mapStateToProps(state) {
//   return {
//     newTodoInput: selectTodosInput(state),
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onNewTodoChange(inputVal) {
//       dispatch(todoChange(inputVal));
//     },
//     onNewTodoAdd(inputVal) {
//       dispatch(todoAdd(inputVal));
//     },
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

function TodoFormContainer() {
  const newTodoInput = useSelector(selectTodosInput);
  const dispatch = useDispatch();

  function handleNewTodoChange(inputVal) {
    dispatch(todoChange(inputVal));
  }

  function handleNewTodoAdd(inputVal) {
    dispatch(todoAdd(inputVal));
  }

  return (
    <TodoForm
      newTodoInput={newTodoInput}
      onNewTodoChange={handleNewTodoChange}
      onNewTodoAdd={handleNewTodoAdd}
    />
  );
}

export default TodoFormContainer;
