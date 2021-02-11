import React, { Component } from "react";
class Clock extends Component {
  state = {};
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        title="نمایش لحظه ای"
        // stroke-linecap="round"
        // stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    );
  }
}

export default Clock;
