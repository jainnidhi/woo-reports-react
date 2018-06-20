import React from 'react';
import OrdersHeader from './header/OrdersHeader';
import CustomerHeader from './header/CustomerHeader';
import StockHeader from './header/StockHeader';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {header} = this.props;
		return (
			<div className="header">
				<h3 className="reports-title">Reports</h3>
				<div className="main-header">
					<ul>
						<li><a href="/woocommerce/orders">Orders</a>
							{header === 'OrdersHeader' && <OrdersHeader />}
						</li>
						<li><a href="/woocommerce/customers">Customers</a>
							{header === 'CustomerHeader' && <CustomerHeader />}
						</li>
						<li><a href="/woocommerce/stock">Stock</a>
							{header === 'StockHeader' && <StockHeader />}
						</li>
					</ul>
				</div>
			</div>
		);
	}
}


export default Header;