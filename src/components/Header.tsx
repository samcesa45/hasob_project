import React from 'react';
import logoImg from '../assets/img/client_logo.png';
import { Link } from 'react-router-dom';
import BurgerIcon from '../Icons/BurgerIcon';

export default function Header(): JSX.Element {
	const [showMenu, setShowMenu] = React.useState(false);
	function showMenuHandler() {
		setShowMenu(true);
	}
	return (
		<>
			<header className="fixed w-full flex pl-5 pr-5 justify-between items-center h-16 bg-blue-900  text-white z-50">
				<div>
					<Link to="/">
						<img src={logoImg} alt="logo" className=" w-14 h-14 rounded-md" />
					</Link>
				</div>

				<nav>
					<BurgerIcon show={showMenuHandler} />
					{!showMenu && (
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
					)}
				</nav>
			</header>
		</>
	);
}
