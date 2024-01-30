import "./Header.css";
import transparent_logo from "../../assets/images/newME.jpg";

const Header = () => {
	return (
		<div id="mission" className="everest__header section__padding">
			<div className="everest__header-content">
				<div className="everest__header-image">
					<img src={transparent_logo} alt="logo" />
				</div>
                <h2>Welcome To Everest Allegiance</h2>
                <h3>Together and United</h3>
			</div>
		</div>
	);
};

export default Header;
