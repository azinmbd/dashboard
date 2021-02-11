import React, { Component } from "react";
class TagIcon extends Component {
  state = {};
  render() {
    return (
      <svg
        className="mr-2"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#314ef7"
        strokeWidth="2"
      >
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7" y2="7"></line>
      </svg>
    );
  }
}

export default TagIcon;
