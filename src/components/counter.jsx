import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3"]
  // };

  //   constructor() {
  //     super();
  //    *needs to bind the element in order to have access to 'this'*
  //    *workaround is to use arrow functions, they have access to 'this' by default*
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  //arrow functions have access to 'this' by default, no binding is needed
  // handleIncrement = product => {
  //   console.log(product);
  //   n;
  //   this.setState({ value: this.state.value + 1 });
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log("Counter - Updated");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    if (
      prevState !== null &&
      prevState.counter.value !== this.props.counter.value
    ) {
      //Ajax call to get new value, prevents redundant execution of ajax calls
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Render");
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.renderTags()} */}
      </div>
    );
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const value = this.props.counter.value;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
