import { useState } from "react";

import "./Contact.css";
import BlackButton from "../BlackButton/BlackButton";
import NavBar from "../NavBar/NavBar";

const Contact = () => {
	/*	interface contactProps {
		image: string;
		name: string;
	}

	/*const ContactField = ({ image, name }: contactProps) => {
		return (
			<div className="everest__contacts-field">
				<img src={image} alt={name} />
				<h2>{name}</h2>
			</div>
		);
	};
*/
	const [inputType, setInputType] = useState(0);

	const getForm = () => {
		if (inputType == 0) {
			return (
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfL2VLs81vnN2wx_RoEd6RM52UuJIrfFJFvy5bHQPdcjKZ55w/viewform?embedded=true">
					Loading…
				</iframe>
			);
		} else if (inputType == 1) {
			return (
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdZ2n61uFVSMPOtaUhaXf5SmaqlS68_r5TIaaO8GcfaZ90MPg/viewform?embedded=true">
					Loading…
				</iframe>
			);
		} else {
			return (
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeBZf37CunYAbg9XzRX9b1GYIhMCi_9CqyENYtXlRytyizZ9A/viewform?embedded=true">
					Loading…
				</iframe>
			);
		}
	};

	return (
		<div id="contact us" className="everest__contacts">
			<NavBar dark={true} />
			{/*<div className="everest__contacts-socials">
				<ContactField
					image={gmail}
					name="everestallegiance@gmail.com"
				/>
				<ContactField image={insta} name="everestallegiance" />
				<ContactField image={phone} name="780-266-2850" />
			</div>
	*/}
			<div className="bodyDiv">
				{/*<div className="contactInfo">
					<h1>Contact Us</h1>
					<p>V</p>
</div>*/}
				<div className="formDiv">
					<div className="formSelectionDiv">
						<BlackButton
							label={"Dancer Registration"}
							onClick={() => {
								setInputType(0);
							}}
							reverse={inputType == 0 ? true : false}
						/>
						<BlackButton
							label={"Teacher Registration"}
							onClick={() => {
								setInputType(1);
							}}
							reverse={inputType == 1 ? true : false}
						/>
						<BlackButton
							label={"Volunteer Registration"}
							onClick={() => {
								setInputType(2);
							}}
							reverse={inputType == 2 ? true : false}
						/>
					</div>
					<div className="formContainer">{getForm()}</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
