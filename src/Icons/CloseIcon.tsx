import * as React from 'react';
interface Props {
	onClose: () => void;
}
export default function CloseIcon({ onClose }: Props): JSX.Element {
	return (
		<svg
			onClick={onClose}
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6 font-extrabold text-gray-600"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	);
}
