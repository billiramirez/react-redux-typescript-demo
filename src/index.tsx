import React from "react";
import ReactDOM from "react-dom";

interface IProps {
  color?: string;
}

// const App = (props: IProps): JSX.Element => {
//   return <div>Hey there, {props.color}</div>;
// };

class App extends React.Component<IProps> {
  state = {
    counter: 0
  };

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App color="red" />, document.querySelector("#root"));
