import * as React from 'react';
import { Link } from 'react-router-dom';
import SettingsIcon from '../../../Icons/SettingsIcon';
import LargeCard from '../../../UI/LargeCard';
export default function Semester(): JSX.Element {
	return (
		<div className="grid grid-cols-8">
			<div className="bg-blue-800 text-gray-50 py-14 text-xs text-light">
				<aside>
					<div>
						<h2>Logo</h2>
					</div>
					<div className="w-full">
						<nav>
							<ul>
								<li className="py-4 hover:bg-gray-500">
									<Link to="/settings">
										<span>
											<SettingsIcon />
										</span>
										Dashboard
									</Link>
								</li>
								<li className="py-4 hover:bg-gray-500">
									<Link to="/semester">
										<span>
											<SettingsIcon />
										</span>
										Semester
									</Link>
								</li>
								<li className="py-4 hover:bg-gray-500">
									<Link to="/faculty">
										<SettingsIcon />
										Faculty
									</Link>
								</li>
								<li className="py-4 hover:bg-gray-500">
									<Link to="/programs">
										<SettingsIcon />
										Programs
									</Link>
								</li>
								<li className="py-4 hover:bg-gray-500">
									<Link to="/classes">
										<SettingsIcon />
										Classes
									</Link>
								</li>
								<li className="py-4 hover:bg-gray-500">
									<Link to="/settings">
										<SettingsIcon />
										Settings
									</Link>
								</li>
								<li className="py-4 hover:bg-gray-500">
									<Link to="/logout">
										<span>
											<SettingsIcon />
										</span>
										Logout
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</aside>
			</div>
			<div className="col-span-6  p-4 rounded-3xl shadow-lg z-20 h-screen">
				<div className="flex justify-between py-8">
					<div>
						<h2 className="text-blue-900">Semesters</h2>
					</div>
					<div className="flex items-center">
						<button className="px-4 mr-8 py-1 text-white bg-blue-800 rounded-md">
							Add+
						</button>
						<fieldset className="border px-1">
							<legend className="text-xs font-extralight">Sort By</legend>
							<select className="outline-none">
								<option>filter</option>
								<option>engineering</option>
								<option>eng</option>
							</select>
						</fieldset>
					</div>
				</div>
				<LargeCard>
					<table className="table-auto  mx-auto w-full text-center h-160 font-light">
						<thead className="bg-black text-white leading-10 font-light">
							<tr className="font-light">
								<th>S/N</th>
								<th>Program Code</th>
								<th>Program Name</th>
								<th>Department</th>
								<th>Degree Name</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody className="cursor-pointer">
							<tr className="border-b-4 border-t-4 border-light-gray-500 bg-blue-50 hover:bg-blue-300 hover:text-white">
								<th>1</th>
								<td>EE01</td>
								<td>Electrical Engineering</td>
								<td>Electrical</td>
								<td>Undergraduate-B.eng</td>
								<td className="text-blue-800">
									<button className="mr-2">View</button>
									<span className="border-r-2 mr-1"></span>
									<button>Edit</button>
								</td>
							</tr>
							<tr className="border-b-4 border-t-4 border-light-gray-500 hover:bg-gray-50">
								<th>2</th>
								<td>EE01</td>
								<td>Electrical Engineering</td>
								<td>Electrical</td>
								<td>Undergraduate-B.eng</td>
								<td className="text-blue-800">
									<button className="mr-2">View</button>
									<span className="border-r-2 mr-1"></span>
									<button>Edit</button>
								</td>
							</tr>
							<tr className="border-b-4 border-t-4 border-light-gray-500 bg-blue-50 hover:bg-blue-300 hover:text-white">
								<th>3</th>
								<td>EE01</td>
								<td>Electrical Engineering</td>
								<td>Electrical</td>
								<td>Undergraduate-B.eng</td>
								<td className="text-blue-800">
									<button className="mr-2">View</button>
									<span className="border-r-2 mr-1"></span>
									<button>Edit</button>
								</td>
							</tr>
							<tr className="border-b-4 border-t-4 border-light-gray-500 hover:bg-gray-50">
								<th>4</th>
								<td>EE01</td>
								<td>Electrical Engineering</td>
								<td>Electrical</td>
								<td>Undergraduate-B.eng</td>
								<td className="text-blue-800">
									<button className="mr-2">View</button>
									<span className="border-r-2 mr-1"></span>
									<button>Edit</button>
								</td>
							</tr>

							<tr className="border-b-4 border-t-4 border-light-gray-500 bg-blue-50 hover:bg-blue-300 hover:text-white">
								<th>5</th>
								<td>EE01</td>
								<td>Electrical Engineering</td>
								<td>Electrical</td>
								<td>Undergraduate-B.eng</td>
								<td className="text-blue-800">
									<button className="mr-2">View</button>
									<span className="border-r-2 mr-1"></span>
									<button>Edit</button>
								</td>
							</tr>
							<tr className="border-b-4 border-t-4 border-light-gray-500 bg-blue-50 hover:bg-blue-300 hover:text-white">
								<th>6</th>
								<td>EE01</td>
								<td>Electrical Engineering</td>
								<td>Electrical</td>
								<td>Undergraduate-B.eng</td>
								<td className="text-blue-800">
									<button className="mr-2">View</button>
									<span className="border-r-2 mr-1"></span>
									<button>Edit</button>
								</td>
							</tr>
							<tr className="border-b-4 border-t-4 border-light-gray-500 hover:bg-gray-50">
								<th>7</th>
								<td>EE01</td>
								<td>Electrical Engineering</td>
								<td>Electrical</td>
								<td>Undergraduate-B.eng</td>
								<td className="text-blue-800">
									<button className="mr-2">View</button>
									<span className="border-r-2 mr-1"></span>
									<button>Edit</button>
								</td>
							</tr>
							<tr className="border-b-4 border-t-4 border-light-gray-500 bg-blue-50 hover:bg-blue-300 hover:text-white">
								<th>8</th>
								<td>EE01</td>
								<td>Electrical Engineering</td>
								<td>Electrical</td>
								<td>Undergraduate-B.eng</td>
								<td className="text-blue-800">
									<button className="mr-2">View</button>
									<span className="border-r-2 mr-1"></span>
									<button>Edit</button>
								</td>
							</tr>
							<tr className="border-b-4 border-t-4 border-light-gray-500 hover:bg-gray-50">
								<th>9</th>
								<td>EE01</td>
								<td>Electrical Engineering</td>
								<td>Electrical</td>
								<td>Undergraduate-B.eng</td>
								<td className="text-blue-800">
									<button className="mr-2">View</button>
									<span className="border-r-2 mr-1"></span>
									<button>Edit</button>
								</td>
							</tr>
							<tr className="border-b-4 border-t-4 border-light-gray-500 bg-blue-50 hover:bg-blue-300 hover:text-white">
								<th>10</th>
								<td>EE01</td>
								<td>Electrical Engineering</td>
								<td>Electrical</td>
								<td>Undergraduate-B.eng</td>
								<td className="text-blue-800">
									<button className="mr-2">View</button>
									<span className="border-r-2 mr-1"></span>
									<button>Edit</button>
								</td>
							</tr>
						</tbody>
					</table>
				</LargeCard>
			</div>
			<div></div>
		</div>
	);
}
