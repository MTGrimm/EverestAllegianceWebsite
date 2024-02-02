import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./NavBar.css";

const Menu = () => {
	return (
		<>
			<p>
				<a href="/">Landing</a>
			</p>
			<p>
				<a href="/about">About</a>
			</p>
			{/*<p>
				<a href="/events">Events</a>
	</p>*/}
			<p>
				<a href="/members">Members</a>
			</p>
			<p>
				<a href="/registration">Registration</a>
			</p>
		</>
	);
};

interface Props {
	dark: boolean;
}

const NavBar = ({ dark }: Props) => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const classMode = dark ? "dark" : "gradient__bg";
	const customClassName = "everest__navbar  " + classMode;
	const customMobileClassName =
		"everest__navbar-menu_container scale-up-center " + classMode;
	return (
		<div className={customClassName}>
			<div className="everest__navbar-links">
				<div className="everest__navbar-links_logo"></div>
				<div className="everest__navbar-links_container">
					<Menu />
				</div>
				<div className="everest__navbar-menu">
					{toggleMenu ? (
						<RiCloseLine
							color="#fff"
							size={27}
							onClick={() => setToggleMenu(false)}
						/>
					) : (
						<RiMenu3Line
							color="#fff"
							size={27}
							onClick={() => setToggleMenu(true)}
						/>
					)}
					{toggleMenu && (
						<div className={customMobileClassName}>
							<div className="everest__navbar-menu_container-links">
								<Menu />
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
