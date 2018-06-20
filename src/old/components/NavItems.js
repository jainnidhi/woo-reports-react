import React, { Fragment } from 'react';

class NavItems extends React.Component {
	render() {
		return(
			<Fragment>
				<li className="nav-list-item"><a href="#">Home</a></li>
				<li className="nav-list-item"><a href="#">About</a></li>
				<li className="nav-list-item"><a href="#">Contact</a></li>
				<li className="nav-list-item"><a href="#">Blog</a></li>
			</Fragment>
		)
	}
}

export default NavItems;