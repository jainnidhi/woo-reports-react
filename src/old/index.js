import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import NotFound from './components/NotFound';
import Forms from './components/Forms';
import Clock from './components/Clock';
import Counter from './components/Counter';
import Login from './components/Login';
import Posts from './components/Posts';
import Countdown from './components/Countdown';
import Contact from './components/Contact';
import WCReports from './components/WCReports';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/forms" component={Forms} />
				<Route exact path="/clock" component={Clock} />
				<Route exact path="/counter" render={() => ( <Counter increment="1" /> )} />
				<Route exact path="/login" render={() => (<Login isLoggedIn="false" />)} />
				<Route exact path="/posts" component={Posts} />
				<Route exact path="/countdown" component={Countdown} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/woocommerce" component={WCReports} />
				<Route exact path="/woocommerce/sales-by-date" render={() => (<WCReports filter="sales-by-date" />)} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	)
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
