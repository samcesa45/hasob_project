import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import heroImg from '../assets/img/schoolHero.jpeg';
// import Login from '../Pages/Login';

interface Props {
	modalIsSHown: boolean;
	onShow: () => void;
	onHide: () => void;
}
export default function Home({
	onShow,
	onHide,
	modalIsSHown,
}: Props): JSX.Element {
	return (
		<>
			<section className="relative bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
						<svg
							className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-full"
							fill="currentColor"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true">
							<polygon points="0 100, 0 0, 100 100" />
						</svg>
						<h1 className="text-5xl font-medium  text-blue-900 leading-normal">
							Moshood <br /> Abiola
							<br /> Polytechnic
						</h1>
						<p className="text-gray-600 max-w-xs pt-16">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Corporis, in ab voluptas tempore maxime, illo quam, alias
							provident laborum magni commodi aperiam autem modi quisquam
							mollitia ex quaerat delectus? Optio!
						</p>
						<div className="mt-8">
							<button
								className="bg-blue-900 py-1 px-8 text-white  font-medium rounded-md shadow-lg mr-12 z-10 text-2xl"
								onClick={onShow}>
								<Link to="/login">Login</Link>
							</button>

							<button className="bg-gray-600 pt-0 pb-0 pl-4 pr-4 text-white rounded-sm shadow-lg z-10">
								<Link to="/create-account">Register</Link>
							</button>
						</div>
					</div>
					<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
						<img
							src={heroImg}
							className="h-96 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
							alt="home_hero_img"
						/>
					</div>
				</div>
				<Outlet />
			</section>
		</>
	);
}
