import React from 'react';
import Card from '../../../UI/Card';
import logoImg from '../../../assets/img/client_logo.png';

export default function Faculty(): JSX.Element {
	return (
		<section className="grid grid-cols-3">
			<div className="bg-blue-800  col-span-1 max-w-xs">
				<aside>
					<div>heello from aside</div>
				</aside>
			</div>

			<div className="p-8 shadow-2xl min-h-screen min-w- rounded-3xl">
				<div>
					<h1>Faculties</h1>
				</div>
				<div>
					<button>Add +</button>
					<label>Sort By</label>
					<select>
						<option>falculty of engineering</option>
						<option>falculty of engineering</option>
						<option>falculty of engineering</option>
					</select>
				</div>

				<Card>
					<div className="flex justify-around">
						<div className="rounded-full   w-24 h-24 bg-blue-900 border border-black relative">
							<img
								src={logoImg}
								alt="logo_img"
								className=" w-16 h-16 absolute top-4 left-4"
							/>
						</div>
						<div className="font-sans text-gray-600">
							<h4 className="mb-2">Falculty of Engineering</h4>
							<p className="text-sm">Engineering Block</p>
							<p className="text-sm">08055916394</p>
							<p className="text-sm">facultyofengineering@mapoly.edu.org</p>
							<div className="text-gray-600">
								<button className="mr-1 text-blue-900">Edit</button>
								<span>||</span>
								<button className="ml-1 text-blue-900">Delete</button>
							</div>
						</div>
					</div>
				</Card>
			</div>

			<div className="bg-gray-100  col-span-1"></div>
		</section>
	);
}
