import { Component, createRef } from "react";
import styles from './Select.module.css';

class SelectBonus extends Component {
  state = {
    open: false,
  };
  hostRef = createRef();
  handleOpen = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };
  componentDidMount() {
    document.addEventListener('click', (event) => {
      if (!this.hostRef.current?.contains(event.target)) {
        this.setState({
          open: false,
        });
      }
    });
  }
  render() {
          // { selected: 'Romain' }
    // const { selected: Selected }

    const { selected, items, onSelected, renderSelected, renderItem: Item } = this.props;
    const { open } = this.state;

    return (
      <div className="SelectBonus" onClick={this.handleOpen} ref={this.hostRef}>
        <div className={styles.selected}>{renderSelected ? renderSelected(selected) : selected}</div>
        {open && (
          <div className={styles.menu}>
            {items.map((item) => (
              <Item key={item} onClick={() => onSelected(item)}>{item}</Item>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default SelectBonus;
