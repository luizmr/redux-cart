import React from 'react';
import { motion } from 'framer-motion';

// components
import Header from './components/Header';
import Content from './components/Content';

// utils
import { connect } from 'react-redux';

const variants = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 1, x: '-240px' },
};

const Menu = ({ isOpen, setIsOpen, user }) => {
	return (
		<>
			<motion.div
				className="menu"
				animate={isOpen ? 'open' : 'closed'}
				variants={variants}
			>
				<div className="menu__inside">
					<Header
						isOpen={isOpen}
						client={user}
						handleClick={() => setIsOpen(!isOpen)}
					/>
					<div className={isOpen ? 'menu__content' : 'menu__off'}>
						<Content />
					</div>
				</div>
			</motion.div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.auth.user,
	};
};

export default connect(mapStateToProps)(Menu);
