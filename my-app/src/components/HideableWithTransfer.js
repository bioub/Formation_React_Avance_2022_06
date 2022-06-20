import { Component } from "react";

export default class HideableWithTransfer extends Component {
  state = {
    show: this.props.defaultShow ?? true,
  };
  handleClick = () => {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  };
  render() {
    const { show } = this.state;
    const { children } = this.props;
    return (
      <div className="EnhancedComponent">
        <button onClick={this.handleClick}>On/Off</button>
        {children(show)}
      </div>
    );
  }
}
