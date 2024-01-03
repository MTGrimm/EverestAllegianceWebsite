import gmail from "../../assets/images/iconmonstr-gmail-1-240.png";
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
				<ContactField image={gmail} name="everestallegiance" />
				<ContactField image={gmail} name="780-266-2850" />
			</div>
		</div>
	);
};

export default Contact;
