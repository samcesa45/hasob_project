import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './reduxStore/app';
import { HelmetProvider } from 'react-helmet-async';

function Render() {
	const App = require('./App').default;
	ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					<HelmetProvider>
						<App />
					</HelmetProvider>
				</BrowserRouter>
			</Provider>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
Render();

if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept('./App', Render);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
