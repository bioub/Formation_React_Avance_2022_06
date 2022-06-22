import './TodoForm.css';

export default function TodoForm({
  newTodoInput,
  onNewTodoChange,
  onNewTodoAdd,
}) {
  console.log('TodoForm renders');
  function handleSubmit(event) {
    event.preventDefault();
    onNewTodoAdd(newTodoInput);
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={newTodoInput}
        onChange={(event) => onNewTodoChange(event.target.value)}
      />
      <button>+</button>
    </form>
  );
}
