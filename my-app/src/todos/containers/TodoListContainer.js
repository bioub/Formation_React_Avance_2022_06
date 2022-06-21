import { connect } from 'react-redux';

import TodoList from '../components/TodoList/TodoList';
import { selectTodosCount, selectTodosItems } from '../selectors';

function mapStateToProps(state) {
  return {
    items: selectTodosItems(state),
    count: selectTodosCount(state),
  };
}

const enhance = connect(mapStateToProps);
export default enhance(TodoList);
