import React, { Component, PropTypes } from 'react';

export default class NumberButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }
  handleClickEvent() {
    this.props.onLocalClick(Number(this.props.buttonVal));
  }
  render() {
    return (
      <button className="number-button" onClick={this.handleClickEvent}>
        +{this.props.buttonVal}
      </button>
    );
  }
}
