import { Component, memo, PureComponent } from 'react';

import TodoCount from '../TodoCount/TodoCount';
import TodoItem from '../TodoItem/TodoItem';

// export default class TodoList extends PureComponent {
//   // shouldComponentUpdate(nextProps) {
//   //   return this.props.items !== nextProps.items;
//   // }
//   render() {
//     console.log('TodoList renders');
//     const { count, items, onDeleteItem } = this.props;
//     return (
//       <div>
//         <div className="TodoList">
//           {items.map((it) => (
//             <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
//           ))}
//         </div>
//         <TodoCount count={count} />
//       </div>
//     );
//   }
// }

function TodoList({ count, items, onDeleteItem }) {
  console.log('TodoList renders');
  return (
    <div>
      <div className="TodoList">
        {items.map((it) => (
          <TodoItem key={it.id} item={it} onDeleteItem={onDeleteItem} />
        ))}
      </div>
      <TodoCount count={count} />
    </div>
  );
}

// export default memo(TodoList, (prevProps, nextProps) => prevProps.items === nextProps.items);
export default memo(TodoList);
