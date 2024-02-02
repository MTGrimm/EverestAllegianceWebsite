import "./Header.css";
import NavBar from "../NavBar/NavBar";

const Header = () => {
	return (
		<div id="mission" className="everest__header section__padding">
			<NavBar dark={false} />
			<div className="everest__header-content">
				{/*<div className="everest__header-image">
					<img src={transparent_logo} alt="logo" />
				</div>*/}
				<h2>Welcome To Everest Allegiance</h2>
				<h3>Together and United</h3>
			</div>
		</div>
	);
};

export default Header;
