import React from 'react';
import WooCommerceAPI from 'woocommerce-api';

const WooCommerce = new WooCommerceAPI({
	url: 'http://powerpacktest.local',
	consumerKey: 'ck_a264d9b0399050253ede1bc6b8ff0b5d90d3f162',
	consumerSecret: 'cs_e67f12ed8b926cc2df26e378faadccc021bc74de',
	wpAPI: true,
	version: 'wc/v2'
});

class WCReports extends React.Component {
	constructor(props) {
		super(props);

		WooCommerce.get('reports/sales', (err, data, res) => {
			console.table(JSON.parse(res));
		});
	}

	render() {
		return(
			<div className="wc-reports-filter">
				<div className="header">
					<ul>
						<li><a href="/woocommerce/orders">Orders</a></li>
						<li><a href="#">Customers</a></li>
						<li><a href="#">Stock</a></li>
					</ul>
				</div>
				<div className="sub-header">
					<ul>
						<li><a href="/woocommerce/orders/sales-by-date">Sales by date</a></li>
						<li><a href="/woocommerce/orders/sales-by-product">Sales by product</a></li>
						<li><a href="/woocommerce/orders/sales-by-category">Sales by category</a></li>
						<li><a href="/woocommerce/orders/coupons-by-date">Coupons by date</a></li>
						<li><a href="/woocommerce/orders/customer-downloads">Customer Downloads</a></li>
					</ul>
				</div>
			</div>
		);
	}
}


export default WCReports;