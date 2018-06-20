import React from 'react';
import Header from './Header';
import Content from './Content';
import './../css/WCReports.css';

class WCReports extends React.Component {
	constructor() {
		super(...arguments);
	}

	getTitle() {
		const {header} = this.props;
		let title = '';

		if ( 'OrdersHeader' === header ) {
			title = 'Orders';
		}
		if ('CustomerHeader' === header) {
			title = 'Customers';
		}
		if ('StockHeader' === header) {
			title = 'Stocks';
		}

		return title;
	}

	render() {
		const title = this.getTitle();

		return(
			<div className="wc-reports-filter clearfix">
				<Header header={this.props.header}/>
				<Content filter={this.props.filter} pagetitle={title}/>
			</div>
		);
	}
}


export default WCReports;