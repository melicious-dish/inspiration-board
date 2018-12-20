import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="card">
        <ul>
          {this.props.text}
          {this.props.emoji}
          <button> Delete </button>
        </ul>
      </div>
    )
  }
}

Card.propTypes = {

};

export default Card;
