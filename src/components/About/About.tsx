import "./About.css";
import NavBar from "./../NavBar/NavBar";
import Header from "./../Header/Header";

const About = () => {
	return (
        <div className="containerDiv">
            <NavBar/>
            <Header/>
            <div id="about" className="everest__about section__margin">
                <div className="everest__about-heading">
                    <h1 className="gradient__text">About Us</h1>
                </div>
                <div className="everest__about-description">
                    <p>
                        Welcome to Everest Allegiance, a dynamic non-profit organization founded by Arju Baniya,
                        headed by today's youth representing a wide range of ages, races, occupations, and academic
                        backgrounds. In collaboration with Action for Healthy Communities, we are committed to fostering
                        positive change in our community. As a young and vibrant group, Everest Allegiance is driven by
                        the passion and dedication of its members, united in the pursuit of a healthier and more
                        prosperous future. Our Mission is to inspire transformative initiatives that leave a lasting impact
                        on the well-being of individuals and the community at large. Join us on our journey as we strive
                        to make a difference and create a legacy of positive change. Together, we can reach
                        new heights and build a stronger, healthier tomorrow!
                    </p>
                </div>
            </div>
        </div>
	);
};

export default About;
