import React from 'react';

const CustomerHeader = (props) => {
	return (
		<ul className="sub-header">
			<li><a href="/woocommerce/customers/customer-vs-guests">Customer vs. guests</a></li>
			<li><a href="/woocommerce/customers/customer-list">Customer list</a></li>
		</ul>
	);
}

export default CustomerHeader;