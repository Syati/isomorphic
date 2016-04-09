import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        Home
        <Link to={`/todo`}>Todo</Link>
      </div>
    );
  }
}