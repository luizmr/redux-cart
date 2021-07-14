import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/_all.scss';
// import { StateProvider } from './store/StateProvider';
// import reducer, { initialState } from './store/ContextReducer';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
	<React.StrictMode>
		{/* <StateProvider initialState={initialState} reducer={reducer}> */}
		<Provider store={store}>
			<App />
		</Provider>
		{/* </StateProvider> */}
	</React.StrictMode>,
	document.getElementById('root'),
);
