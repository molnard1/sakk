import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function NavbarComponent() {
  return (
	<>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to="/">Sakkozók</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav me-auto">
					<li className="nav-item">
					<Link className="nav-link" to="/create">Új sakkozó</Link>
					</li>
				</ul>
				</div>
			</div>
		</nav>
		<Outlet />
	</>
  );
};