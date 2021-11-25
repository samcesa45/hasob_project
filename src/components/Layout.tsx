import * as React from 'react';

interface Props {
	children: JSX.Element;
}
export default function Layout({ children }: Props): JSX.Element {
	return <main className="container px-8 py-32">{children}</main>;
}
