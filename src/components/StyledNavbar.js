import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<NavLink
				to="/"
				className={({ isActive }) =>
					`${isActive ? "active" : null} link`
				}
			>
				Home
			</NavLink>
			<NavLink
				to="/about"
				className={({ isActive }) =>
					`${isActive ? "active" : null} link`
				}
			>
				About
			</NavLink>
			<NavLink
				to="/products"
				className={({ isActive }) =>
					`${isActive ? "active" : null} link`
				}
			>
				Products
			</NavLink>
			<NavLink
				to="/login"
				className={({ isActive }) =>
					`${isActive ? "active" : null} link`
				}
			>
				Login
			</NavLink>
		</nav>
	);
};

export default Navbar;
