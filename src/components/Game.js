import React, { Component } from 'react';

import paper from '../images/papier.svg';
import scissors from '../images/nozyczki.svg';
import rock from '../images/kamien.svg';

class Game extends Component {
	state = {
		hands: [rock, paper, scissors],
		playerIndex: 0,
		computerIndex: 0,
		resultIndex: 0,
		playerScore: 0,
		computerScore: 0,
		gameResult: ['Remis', 'Wygrał Gracz', 'Wygrał Komputer'],
	};

	play = () => {
		const playerChoice = Math.floor(Math.random() * 3);
		const computerChoice = Math.floor(Math.random() * 3);

		if (playerChoice === computerChoice) {
			this.setState({ resultIndex: 0 });
		} else if (playerChoice === 0 && computerChoice === 1) {
			this.setState({ resultIndex: 2, computerScore: this.state.computerScore + 1 });
		} else if (playerChoice === 0 && computerChoice === 2) {
			this.setState({ resultIndex: 1, playerScore: this.state.playerScore + 1 });
		} else if (playerChoice === 1 && computerChoice === 0) {
			this.setState({ resultIndex: 1, playerScore: this.state.playerScore + 1 });
		} else if (playerChoice === 1 && computerChoice === 2) {
			this.setState({ resultIndex: 2, computerScore: this.state.computerScore + 1 });
		} else if (playerChoice === 2 && computerChoice === 0) {
			this.setState({ resultIndex: 2, computerScore: this.state.computerScore + 1 });
		} else if (playerChoice === 2 && computerChoice === 1) {
			this.setState({ resultIndex: 1, playerScore: this.state.playerScore + 1 });
		}

		this.setState({ playerIndex: playerChoice, computerIndex: computerChoice });
	};

	render() {
		const {
			hands,
			playerIndex,
			computerIndex,
			resultIndex,
			playerScore,
			computerScore,
			gameResult,
		} = this.state;

		return (
			<React.Fragment>
				<main className="game">
					<img className="game__player-hand" src={hands[playerIndex]} alt="paper, scissors or rock SVG" />
					<div className="game__result">{gameResult[resultIndex]}</div>
					<img className="game__computer-hand" src={hands[computerIndex]} alt="paper, scissors or rock SVG" />
					<span className="game__player-text">Gracz</span>
					<button className="game__start" onClick={this.play}>
						Zagraj
					</button>
					<span className="game__computer-text">Komputer</span>
				</main>
				<div className="result">
					<h2 className="result__title">Wynik:</h2>
					<span className="result__player">{playerScore}</span>
					<span className="result__computer">{computerScore}</span>
				</div>
			</React.Fragment>
		);
	}
}

export default Game;
