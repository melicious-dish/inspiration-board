import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {

  constructor() {
    super();

    this.state = {
      // card: CARD_DATA.cards,
      cards: [],
    };
  }

  componentDidMount() {
    console.log("The component did in fact mount");

  const GET_ALL_CARDS_URL = `${this.props.url}${this.props.boardName}/cards`;

  axios.get(GET_ALL_CARDS_URL)
    .then((response) => {
      this.setState({
        cards: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
}






  render() {
    const emoji = require("emoji-dictionary");

    const cardList = this.state.cards.map(({card}) => {
      console.log(card);
      return <Card
        key={card.id}
        text={card.text}
        emoji={emoji.getUnicode(`${card.emoji}`)}
        />
    });
    console.log(cardList);

    return (
      <div>
          {cardList}
      </div>
    )
  }
}

Board.propTypes = {

};
export default Board;
