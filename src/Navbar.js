import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
	return (
		<nav className="nav-bar">
			<img src={logo} />
			<ul className="main-links">
				{links.map((item) => {
					return <li>{item.text}</li>;
				})}
			</ul>
			<ul className="main-logo">
				{social.map((item) => {
					return (
						<li>
							<a href={item.url} />
							{item.icon}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
