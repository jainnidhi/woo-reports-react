import React from 'react';

const OrdersHeader = (props) => {
	return (
		<ul className="sub-header">
			<li><a href="/woocommerce/orders/sales-by-date">Sales by date</a></li>
			<li><a href="/woocommerce/orders/sales-by-product">Sales by product</a></li>
			<li><a href="/woocommerce/orders/sales-by-category">Sales by category</a></li>
			<li><a href="/woocommerce/orders/coupons-by-date">Coupons by date</a></li>
			<li><a href="/woocommerce/orders/customer-downloads">Customer Downloads</a></li>
		</ul>
	);
}

export default OrdersHeader;