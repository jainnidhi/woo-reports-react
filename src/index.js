import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import App from './App';
//import NotFound from './components/NotFound';
import WCReports from './components/WCReports';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/woocommerce" component={WCReports} />
				<Route exact path="/woocommerce/orders" render={() => (<WCReports header="OrdersHeader" />)} />
				<Route exact path="/woocommerce/customers" render={() => (<WCReports header="CustomerHeader" />)} />
				<Route exact path="/woocommerce/stock" render={() => (<WCReports header="StockHeader" />)} />
				<Route exact path="/woocommerce/orders/sales-by-date" render={() => (<WCReports header="OrdersHeader" filter="sales-by-date" />)} />
				<Route exact path="/woocommerce/orders/sales-by-product" render={() => (<WCReports header="OrdersHeader" filter="sales-by-product" />)} />
				<Route exact path="/woocommerce/orders/sales-by-category" render={() => (<WCReports header="OrdersHeader" filter="sales-by-category" />)} />
				<Route exact path="/woocommerce/orders/coupons-by-date" render={() => (<WCReports header="OrdersHeader" filter="coupons-by-date" />)} />
				<Route exact path="/woocommerce/orders/customer-downloads" render={() => (<WCReports header="OrdersHeader" filter="customer-downloads" />)} />
				<Route exact path="/woocommerce/customers/customer-vs-guests" render={() => (<WCReports header="CustomerHeader" filter="customer-vs-guests" />)} />
				<Route exact path="/woocommerce/customers/customer-list" render={() => (<WCReports header="CustomerHeader" filter="customer-list" />)} />
				<Route exact path="/woocommerce/stock/low-stock" render={() => (<WCReports header="StockHeader" filter="low-stock" />)} />
				<Route exact path="/woocommerce/stock/out-of-stock" render={() => (<WCReports header="StockHeader" filter="out-of-stock" />)} />
				<Route exact path="/woocommerce/stock/most-stocked" render={() => (<WCReports header="StockHeader" filter="most-stocked" />)} />
			</Switch>
		</BrowserRouter>
	)
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
