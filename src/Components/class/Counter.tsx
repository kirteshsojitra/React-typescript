import {Component} from "react";

type CounterProp = {
  message: string;
};
type CounterState = {
  count: number;
};
class Counter extends Component<CounterProp, CounterState> {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState({count: this.state.count + 1});
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.state.count} {this.props.message}
      </div>
    );
  }
}

export default Counter;
