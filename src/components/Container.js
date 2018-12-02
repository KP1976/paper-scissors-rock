import React, { Component } from 'react';
import Game from './Game';

import paper from '../images/papier.svg';
import scissors from '../images/nozyczki.svg';
import rock from '../images/kamien.svg';

class Container extends Component {
	state = {
		imageIndex: 0,
	};

	indexChoice = e => {
		switch (e.target.firstElementChild.getAttribute('alt')) {
			case 'paper': {
				this.setState({ imageIndex: 0 });
				break;
			}
			case 'scissors': {
				this.setState({ imageIndex: 1 });
				break;
			}
			case 'rock': {
				this.setState({ imageIndex: 2 });
				break;
			}
			default: {
				break;
			}
		}
	};

	render() {
		return (
			<div className="container">
				<header className="header">
					<h1 className="header__title">papier, nożyczki, kamień</h1>
					<figure className="images">
						<div className="images__circle" onClick={this.indexChoice}>
							<img className="images__img" src={paper} alt="paper" />
						</div>
						<div className="images__circle" onClick={this.indexChoice}>
							<img className="images__img" src={scissors} alt="scissors" />
						</div>
						<div className="images__circle" onClick={this.indexChoice}>
							<img className="images__img" src={rock} alt="rock" />
						</div>
					</figure>
				</header>
				<Game choice={this.state.imageIndex} />
			</div>
		);
	}
}

export default Container;
