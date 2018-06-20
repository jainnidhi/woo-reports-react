import React from 'react';

const StockHeader = (props) => {
	return (
		<ul className="sub-header">
			<li><a href="/woocommerce/stock/low-stock">Low in stock</a></li>
			<li><a href="/woocommerce/stock/out-of-stock">Out of stock</a></li>
			<li><a href="/woocommerce/stock/most-stocked">Most stocked</a></li>
		</ul>
	);
}

export default StockHeader;