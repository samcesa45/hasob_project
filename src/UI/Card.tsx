import React from 'react';

interface Props {
	children?: React.ReactNode;
}
export default function Card({ children }: Props): JSX.Element {
	return (
		<div className="rounded-2xl bg-gray-100 shadow-xl w-120 mx-auto p-4">
			{children}
		</div>
	);
}
