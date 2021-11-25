import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
	children?: React.ReactNode;
}
const modalRoot = document.getElementById('modal') as HTMLElement;
export default function Modal({ children }: Props): JSX.Element {
	return (
		<div className="z-50 fixed left-170 top-180 flex justify-center px-14 py-10 mx-auto bg-white w-120 h-160 shadow-2xl rounded-lg">
			{children}
		</div>
	);
}

ReactDOM.createPortal(Modal, modalRoot);
