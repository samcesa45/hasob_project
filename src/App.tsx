import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';

import Header from './components/Header';
import { store } from './reduxStore/app';
import { loadCurrentUser } from './reduxStore/features/auth/auth.actions';
import { Router } from './router/Router';

function App() {
	React.useEffect(() => {
		store.dispatch(loadCurrentUser());
	}, []);

	return (
		<>
			<ErrorBoundary>
				<Header />
				<Router />
			</ErrorBoundary>
			{/* <Header />

			<main className="container px-8 py-32">
				{modalIsSHown ? <Login onHide={hidemodalHandler} /> : null}
				<Home
					modalIsSHown={modalIsSHown}
					onShow={showmodalHandler}
					onHide={hidemodalHandler}
				/>
			</main> */}
		</>
	);
}

export default App;
