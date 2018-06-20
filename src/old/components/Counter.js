import React from 'react';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}

	componentDidMount() {
		this.interval = setInterval(
			() => this.updateCounter(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval( this.interval );
	}

	updateCounter() {
		this.setState((prevState, props) => ({
			counter: prevState.counter + parseInt(props.increment)
		}));
	}

	render() {
		return (
			<h2>It is showing counter {this.state.counter}</h2>
		)
	}
}

export default Counter;