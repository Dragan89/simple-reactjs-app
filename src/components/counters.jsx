import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Render");
    //object destruction
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        {/* {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Title #{counter.id}</h4>
          </Counter>
        ))} */}
        <button onClick={onReset} className="btn btn-primary btm-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
