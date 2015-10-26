import React, { Component, PropTypes } from 'react';

export default class NumberButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }
  handleClickEvent() {
    console.log('CLICK PROPS', this.props);
    this.props.onLocalClick(Number(this.props.buttonVal));
  }
  render() {
    console.log('PROPS', this.props);
    return (
      <button className="number-button" onClick={this.handleClickEvent}>
        +{this.props.buttonVal}
      </button>
    );
  }
}
