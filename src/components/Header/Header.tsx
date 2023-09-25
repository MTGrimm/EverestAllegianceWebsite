import "./Header.css";
import transparent_logo from "../../assets/images/everest_transparent_white.png";

const Header = () => {
	return (
		<div id="mission" className="everest__header section__padding">
			<div className="everest__header-content">
				<h1 className="gradient__text">
					A nonprofit organization that brings to life the artistic
					spirits of today's youth and adults through dance, music,
					and creativity
				</h1>
				<div className="everest__header-content__input">
					<input type="email" placeholder="Your Email Address" />
					<button type="button">Get Updates</button>
				</div>
			</div>
			<div className="everest__header-image">
				<img src={transparent_logo} alt="logo" />
			</div>
		</div>
	);
};

export default Header;
