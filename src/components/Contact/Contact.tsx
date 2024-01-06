import gmail from "../../assets/images/iconmonstr-gmail-1-240-mixed.png";
import insta from "../../assets/images/iconmonstr-instagram-11-240-mixed.png";
import phone from "../../assets/images/iconmonstr-phone-2-240-mixed.png";

import "./Contact.css";

const Contact = () => {
	interface contactProps {
		image: string;
		name: string;
	}
	const ContactField = ({ image, name }: contactProps) => {
		return (
			<div className="everest__contacts-field">
				<img src={image} alt={name} />
				<h2>{name}</h2>
			</div>
		);
	};
	return (
		<div id="contact us" className="everest__contacts">
			<div className="everest__contacts-socials">
				<ContactField
					image={gmail}
					name=	"everestallegiance@gmail.com"
				/>
				<ContactField image={insta} name="everestallegiance" />
				<ContactField image={phone} name="780-266-2850" />
			</div>
		</div>
	);
};

export default Contact;
