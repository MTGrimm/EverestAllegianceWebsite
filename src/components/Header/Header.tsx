import "./Header.css";
import transparent_logo from "../../assets/images/everest_new_small.png";

const Header = () => {
	return (
		<div id="mission" className="everest__header section__padding">
			<div className="everest__header-content">
				<div className="everest__header-image">
					<img src={transparent_logo} alt="logo" />
				</div>

				<div className="everest__header-content__input">
					<input type="email" placeholder="Your Email Address" />
					<button type="button">Get Updates</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
