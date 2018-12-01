import React, { Component } from 'react';
import Game from './Game';

import paper from '../images/papier.svg';
import scissors from '../images/nozyczki.svg';
import rock from '../images/kamien.svg';

class Container extends Component {
	render() {
		return (
			<div className="container">
				<header className="header">
					<h1 className="header__title">papier, nożyczki, kamień</h1>
					<figure className="images">
						<div className="images__circle">
							<img className="images__img" src={paper} alt="paper SVG" />
						</div>
						<div className="images__circle">
							<img className="images__img" src={scissors} alt="scissors SVG" />
						</div>
						<div className="images__circle">
							<img className="images__img" src={rock} alt="rock SVG" />
						</div>
					</figure>
				</header>
				<Game />
			</div>
		);
	}
}

export default Container;
