import React, { Component } from 'react';
import paper from '../images/papier.svg';
import scissors from '../images/nozyczki.svg';
import rock from '../images/kamien.svg';

class Container extends Component {
	render() {
		return (
			<div className="container">
				<header className="header">
					<h1 className="header__title">papier, nożyczki, kamień</h1>
					<figure className="imgages">
						<img className="images__img" src={paper} alt="paper SVG" />
						<img className="images__img" src={scissors} alt="scissors SVG" />
						<img className="images__img" src={rock} alt="rock SVG" />
					</figure>
				</header>
				<main>
					<hr />
					<div className="game">
						<img className="game__player-hand" src={paper} alt="paper, scissors or rock SVG" />
						<div className="game__result" />
						<img className="game__computer-hand" src={paper} alt="paper, scissors or rock SVG" />
						<span className="game__player-text">Gracz</span>
						<button className="game__start">Zagraj</button>
						<span className="game__computer-text">Komputer</span>
					</div>
					<hr />
				</main>
				<div className="result">
					<h2 className="result__title">Wynik:</h2>
					<span className="result__player" />
					<span className="result__computer" />
				</div>
			</div>
		);
	}
}

export default Container;
