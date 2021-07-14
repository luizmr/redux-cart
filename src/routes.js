import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Products from './pages/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import Cart from './pages/Cart/Cart';
import ProductInfo from './pages/ProductInfo/ProductInfo';

const CustomRoute = ({ key, Component, path }) => (
	<Route exact key={key} path={path} component={Component} />
);
const routeOptions = [
	{
		key: 'products',
		Component: Products,
		path: '/',
	},
	{
		key: 'cart',
		Component: Cart,
		path: '/cart',
	},
	{
		key: 'product-info',
		Component: ProductInfo,
		path: '/product/:cod',
	},
];

export const Routes = () => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<Router>
			<ScrollToTop />
			<Navbar />
			<div className={isOpen ? 'app' : 'app w-80'}>
				<Menu isOpen={isOpen} setIsOpen={setIsOpen} />
				<div className="routes">
					<Switch>
						{routeOptions.map((route) => CustomRoute({ ...route }))}
					</Switch>
				</div>
			</div>
		</Router>
	);
};
