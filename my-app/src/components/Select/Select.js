import { Component, createRef } from "react";
import styles from './Select.module.css';

class Select extends Component {
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
    const { selected, items, onSelected, renderSelected, renderItem } = this.props;
    const { open } = this.state;

    return (
      <div className="Select" onClick={this.handleOpen} ref={this.hostRef}>
        <div className={styles.selected}>{renderSelected ? renderSelected(selected) : selected}</div>
        {open && (
          <div className={styles.menu}>
            {items.map((item) => (
              <div className={styles.item} key={item} onClick={() => onSelected(item)}>
                {renderItem ? renderItem(item) : item}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Select;
