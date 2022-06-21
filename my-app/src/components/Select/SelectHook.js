import { Component, createRef, useEffect, useRef, useState } from 'react';
import styles from './Select.module.css';

// class SelectHook extends Component {
//   state = {
//     open: false,
//   };
//   hostRef = createRef();
//   handleOpen = () => {
//     const { open } = this.state;
//     this.setState({
//       open: !open,
//     });
//   };
//   componentDidMount() {
//     document.addEventListener('click', (event) => {
//       if (!this.hostRef.current?.contains(event.target)) {
//         this.setState({
//           open: false,
//         });
//       }
//     });
//   }
//   render() {
//     const { selected, items, onSelected, renderSelected, renderItem } = this.props;
//     const { open } = this.state;

//     return (
//       <div className="SelectHook" onClick={this.handleOpen} ref={this.hostRef}>
//         <div className={styles.selected}>{renderSelected ? renderSelected(selected) : selected}</div>
//         {open && (
//           <div className={styles.menu}>
//             {items.map((item) => (
//               <div className={styles.item} key={item} onClick={() => onSelected(item)}>
//                 {renderItem ? renderItem(item) : item}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

function SelectHook({
  selected,
  items,
  onSelected,
  renderSelected,
  renderItem,
}) {
  const [open, setOpen] = useState(false);
  const hostRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', (event) => {
      if (!hostRef.current?.contains(event.target)) {
        setOpen((open) => !open); // setOpen(!false);
      }
    });
  }, []);

  return (
    <div className="SelectHook" onClick={() => setOpen(!open)} ref={hostRef}>
      <div className={styles.selected}>
        {renderSelected ? renderSelected(selected) : selected}
      </div>
      {open && (
        <div className={styles.menu}>
          {items.map((item) => (
            <div
              className={styles.item}
              key={item}
              onClick={() => onSelected(item)}
            >
              {renderItem ? renderItem(item) : item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectHook;
