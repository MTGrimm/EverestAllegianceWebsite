import "./AboutNew.css";
import Everest from "./../../assets/images/mt_everest.jpg";
import BlackButton from "./../BlackButton/BlackButton.tsx";
import Instagram from "./../../assets/images/iconmonstr-instagram-11-240.png";
import NavBar from "../NavBar/NavBar.tsx";

const AboutNew = () => {
	const socials = [
		{
			imgSrc: Instagram,
			link: "https://www.instagram.com/everestallegiance/",
		},
	];
	const generateSocials = () => {
		const openLink = (ulr: string) => {
			const newWindow = window.open(ulr, "_blank", "noopener,noreferrer");
			if (newWindow) {
				newWindow.opener = null;
			}
		};
		return socials.map(({ imgSrc, link }, index) => {
			return (
				<div
					key={index}
					className="socialDivSocial"
					onClick={() => openLink(link)}
				>
					<img src={imgSrc} />
				</div>
			);
		});
	};

	return (
		<div className="bigcont">
			<NavBar dark={false} />
			<div className="mainDiv">
				<div className="leftDiv">
					<div className="leftDivImage">
						<img src={Everest} />
					</div>
					<div className="leftDivText">
						<h1>Everest Allegiance</h1>
						<p>Organization</p>
					</div>
					<BlackButton
						label={"Email Us"}
						onClick={() => {
							location.href = "/contacts";
						}}
					/>
					<div className="socialDiv">{generateSocials()}</div>
				</div>
				<div className="rightDiv">
					<div className="rightDivText">
						<h1>About Us</h1>
						<p>
							Welcome to Everest Allegiance, a dynamic non-profit
							organization founded by Arju Baniya, headed by
							today's youth representing a wide range of ages,
							races, occupations, and academic backgrounds. In
							collaboration with Action for Healthy Communities,
							we are committed to fostering positive change in our
							community. As a young and vibrant group, Everest
							Allegiance is driven by the passion and dedication
							of its members, united in the pursuit of a healthier
							and more prosperous future. Our Mission is to
							inspire transformative initiatives that leave a
							lasting impact on the well-being of individuals and
							the community at large. Join us on our journey as we
							strive to make a difference and create a legacy of
							positive change. Together, we can reach new heights
							and build a stronger, healthier tomorrow!
						</p>
					</div>
					<div className="buttonsDiv">
						<BlackButton
							label={"Team"}
							onClick={() => {
								location.href = "/members";
							}}
						/>
						<BlackButton label={"Portfolio"} onClick={() => {}} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutNew;
