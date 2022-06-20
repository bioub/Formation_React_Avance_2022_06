// const HideableTodoCount = hideable(TodoCount);
// const HideableClock = hideable(Clock);

import { Component } from 'react';

export function hideable(WrappedComponent) {
  class EnhancedComponent extends Component {
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
      const { defaultShow, ...wrappedProps } = this.props;
      return (
        <div className="EnhancedComponent">
          <button onClick={this.handleClick}>On/Off</button>
          {show && <WrappedComponent {...wrappedProps} />}
        </div>
      );
    }
  }

  EnhancedComponent.displayName = `Hideable(${WrappedComponent.displayName ?? WrappedComponent.name})`

  return EnhancedComponent;
}
