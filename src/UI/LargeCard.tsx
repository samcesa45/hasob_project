import React from 'react';

interface Props {
	children?: React.ReactNode;
}
export default function LargeCard({ children }: Props): JSX.Element {
	return <div className="rounded-2xl shadow-2xl mx-auto p-4">{children}</div>;
}
