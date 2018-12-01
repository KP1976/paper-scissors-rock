import React, { Component } from 'react';

import paper from '../images/papier.svg';
import scissors from '../images/nozyczki.svg';
import rock from '../images/kamien.svg';

class Game extends Component {
	render() {
		return (
			<main className="game">
				<img className="game__player-hand" src={paper} alt="paper, scissors or rock SVG" />
				<div className="game__result">Wygrał komputer</div>
				<img className="game__computer-hand" src={paper} alt="paper, scissors or rock SVG" />
				<span className="game__player-text">Gracz</span>
				<button className="game__start">Zagraj</button>
				<span className="game__computer-text">Komputer</span>
			</main>
		);
	}
}

export default Game;
