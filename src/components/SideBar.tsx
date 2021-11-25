import * as React from 'react';
import logoImg from '../assets/img/client_logo.png';

import { Link } from 'react-router-dom';
import CloseIcon from '../Icons/CloseIcon';
interface Props {
	close: () => void;
}
export default function SideBar({ close }: Props) {
	const [width, setWidth] = React.useState('0%');

	function showSidebar() {
		setWidth('w-9/12');
	}
	return (
		<div
			className={`fixed top-0 left-0 z-50 ${width} h-screen transform transition bg-white text-blue-400 md:hidden`}>
			<div className="block">
				<Link to="/">
					<img
						src={logoImg}
						alt="logo"
						className=" w-14 h-14 rounded-md text-right"
					/>
				</Link>
			</div>

			<nav>
				<div className="absolute top-4 right-4">
					<CloseIcon onClick={showSidebar} />
				</div>
				<ul className="hidden md:flex text-lg">
					<li className="mr-10">
						<Link to="/login">login</Link>
					</li>
					<li className="mr-10">
						<Link to="/school">School</Link>
					</li>
					<li className="mr-10">
						<Link to="/program">Program</Link>
					</li>
					<li className="mr-10">
						<Link to="/staff">Staff</Link>
					</li>
					<li className="mr-10">
						<Link to="/students">Students</Link>
					</li>
					<li className="mr-10">
						<Link to="/online-store">Online Store</Link>
					</li>
					<li className="mr-10">
						<Link to="/register-student">Create-Account</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
