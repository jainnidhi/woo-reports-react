import React, { Fragment } from 'react';

class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.handleDate = this.handleDate.bind(this);

		this.state = {
			date: ''
		};
	}

	handleDate() {
		this.setState({
			date: new Date(this.dateInput.value)
		});
	}

	render() {
		return(
			<Fragment>
				<h2>Please Select a Date</h2>
				<input type="date" required />
				{console.log(this.state.date)}
			</Fragment>
		)
	}
}

export default Countdown;