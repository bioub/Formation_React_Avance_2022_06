export default function TodoCount(props) {
  console.log('TodoCount renders');
  const count = props.count;
  return (
    <div className="TodoCount">
      {count > 1 ? count + ' todos' : count + ' todo'} remaining
    </div>
  );
}
