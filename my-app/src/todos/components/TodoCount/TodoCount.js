export default function TodoCount(props) {
  const count = props.count;
  console.log(props);

  return (
    <div className="TodoCount">
      {count > 1 ? count + ' todos' : count + ' todo'} remaining
    </div>
  );
}
