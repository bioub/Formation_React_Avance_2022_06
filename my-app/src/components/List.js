export default function List({ items = [], renderItem }) {
  return (
    <div className="List">
      {items.map((item) => (
        <div className="item" key={item}>
          {renderItem ? renderItem(item) : item}
        </div>
      ))}
    </div>
  );
}
