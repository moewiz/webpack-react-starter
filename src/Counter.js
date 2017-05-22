import React, {Component} from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <button
        onClick={this.increase} >
        Count: {this.state.count}
      </button>
    );
  }
}

export default Counter;