import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface ErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
	constructor(props: Readonly<{}>) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: any, errorInfo: any) {
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="container">
					<Helmet>
						<title>Error | Hasob Project</title>
					</Helmet>

					<div>
						<p>status: 500</p>
						<h1>500</h1>
						<h3>
							`We're sorry — something went wrong. Our team has been notified.
							This issue must be fixed soon. But, you can directly report this
							issue by contacting via : adarshaofficial@gmail.com `
						</h3>
						<div>
							<button>
								<Link to="/">Bact to Home</Link>
							</button>
						</div>
					</div>
				</div>
			);
		}
		return this.props.children;
	}
}
