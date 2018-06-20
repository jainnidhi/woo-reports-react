import React, {Fragment} from 'react';
import WooCommerceAPI from 'woocommerce-api';

const WooCommerce = new WooCommerceAPI({
	url: 'http://powerpacktest.local',
	consumerKey: 'ck_a264d9b0399050253ede1bc6b8ff0b5d90d3f162',
	consumerSecret: 'cs_e67f12ed8b926cc2df26e378faadccc021bc74de',
	wpAPI: true,
	version: 'wc/v2'
});

class Content extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {},
			products: {},
			selectedProduct: '',
			selectedCategory: '',
			period: '',
			dateRange: {}
		};
	}

	handleSelectProduct(e) {
		this.setState({
			selectedProduct: e.target.value
		});
	}

	handleSelectCategory(e) {
		this.setState({
			selectedCategory: e.target.value
		});
	}

	handleDateChange(e) {
		if (e.target.value !== '') {
			let name = e.target.name;
			let { dateRange } = this.state;

			dateRange[name] = e.target.value;

			this.setState({
				dateRange
			});
		}
	}

	handleDateButton() {
		this.setState({
			period: 'custom'
		}, () => {
			this.getReports();
		} );
	}

	componentDidMount() {
		const { filter } = this.props;

		if ( 'sales-by-product' === filter ) {

			// WooCommerce.get('products?per_page=100', (err, data, res) => {
			// 	console.table(JSON.parse(res));
			// });

			WooCommerce.getAsync('products?per_page=100').then(result => {
				this.setState({ products: JSON.parse(result.toJSON().body) });
			});
		}

		this.getReports();
	}

	getPeriod(e, index) {
		e.preventDefault();
		
		this.setState({
			period: e.target.getAttribute('data-filter'),
		}, () => {
			this.getReports();
		} );
	}

	getEndpoint() {
		const { filter } = this.props;
		const { period } = this.state;
		const { dateRange } = this.state;

		let endpoint = '';

		switch ( filter ) {
			case 'sales-by-date':
				if ( period === 'custom' ) {
					if (typeof dateRange.date_min !== 'undefined' && typeof dateRange.date_max !== 'undefined') {
						endpoint = `reports/sales?date_min=${dateRange.date_min}&date_max=${dateRange.date_max}`;
					}
				} else if (period !== '' ) {
					endpoint = `reports/sales?period=${period}`;
				} else {
					endpoint = `reports/sales`;
				}
				
				break;
			case 'sales-by-product':
				endpoint = `products/${this.state.selectedProduct}/orders`;
				break;
			case 'sales-by-category':
				endpoint = 'products/categories';
				break;
			default:
				break;
		}

		return endpoint;
	}

	getReports() {
		WooCommerce.get(this.getEndpoint(), (err, data, res) => {
			this.setState({
				data: JSON.parse(res)
			});
			console.table(JSON.parse(res));
		});
	}

	
	render() {
		
		const { data } = this.state;
		const {selectedProduct} = this.state;
		const {period} = this.state;
		const {filter} = this.props;
		return (
			
			<div className="content">
				<div className="content-header">
					<h3 className="content-title">{this.props.pagetitle}</h3>
				</div>
				<div className="state-range">
					<ul>
						<li className={'year' === period && 'is-active'}><a href="#" data-filter="year" onClick={this.getPeriod.bind(this)}>Year</a></li>
						<li className={'last_month' === period && 'is-active'}><a href="#" data-filter="last_month" onClick={this.getPeriod.bind(this)}>Last Month</a></li>
						<li className={'month' === period && 'is-active'}><a href="#" data-filter="month" onClick={this.getPeriod.bind(this)}>This Month</a></li>
						<li className={'week' === period && 'is-active'}><a href="#" data-filter="week" onClick={this.getPeriod.bind(this)}>Last 7 days</a></li>
						<li>
							<span>Custom</span>
							<input type="date" name="date_min" onChange={this.handleDateChange.bind(this)} />
							- <input type="date" name="date_max" onChange={this.handleDateChange.bind(this)} />
							<button onClick={this.handleDateButton.bind(this)}>Go</button>
						</li>
					</ul>
				</div>
				<div className="content-body">
					{filter === 'sales-by-product' &&
					<select value={this.state.selectedProduct} onChange={this.handleSelectProduct.bind(this)}>
						{this.state.products.length > 0 && this.state.products.map((product, i) =>
							<option value={product.id} key={i}>{product.name}</option>
						)}
					</select>
					}
		
					{filter === 'sales-by-category' && 
						<select value={this.state.selectedCategory} onChange={this.handleSelectCategory.bind(this)}>
						{ data !== '' && Object.keys(data).map(key =>
							<option>{data[key].name}</option>
						)}
					</select>
					}

					<div className="reportData">
						{this.state.selectedProduct !== '' && this.getReports()}
						<div className="chart-sidebar">
							<ul className="chart-legend">
						{ data !== '' && Object.keys(data).map(key =>
							<Fragment>
								<li>
									<span className="legend-title">
										<span className="currency-symbol">₹</span>{data[key].total_sales}
									</span>
									<span className="legend-desc">gross sales in this period</span>
								</li>
								<li>
									<span className="legend-title">
										<span className="currency-symbol">₹</span>{data[key].average_sales}
									</span>
									<span className="legend-desc">average gross monthly sales</span>
								</li>
								<li>
									<span className="legend-title">
										<span className="currency-symbol">₹</span>{data[key].net_sales}
									</span>
									<span className="legend-desc">net sales in this period</span>
								</li>
								<li>
									<span className="legend-title">
										<span className="currency-symbol">₹</span>{data[key].average_sales}
									</span>
									<span className="legend-desc">average net monthly sales</span>
								</li>
								<li>
									<span className="legend-title">{data[key].total_orders}</span>
									<span className="legend-desc">orders placed</span>
								</li>
								<li>
									<span className="legend-title">{data[key].total_items}</span>
									<span className="legend-desc">items purchased</span>
								</li>
								<li>
									<span className="legend-title">{data[key].total_refunds}</span>
									<span className="legend-desc">refunded {data[key].total_refunds} orders ({data[key].total_refunds} items)</span>
								</li>
								<li>
									<span className="legend-title">{data[key].total_shipping}</span>
									<span className="legend-desc">charged for shipping</span>
								</li>
								<li>
									<span className="legend-title">{data[key].total_discount}</span>
									<span className="legend-desc">worth of coupons used</span>
								</li>
							</Fragment>
						) }
							</ul>
						</div>						
					</div>
				</div>
			</div>
		);
	}
}


export default Content;