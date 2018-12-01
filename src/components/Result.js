import React, { Component } from 'react';

class Result extends Component {
	render() {
		return (
			<div className="result">
				<h2 className="result__title">Wynik:</h2>
				<span className="result__player" />
				<span className="result__computer" />
			</div>
		);
	}
}
export default Result;
