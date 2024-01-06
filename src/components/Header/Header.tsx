import "./Header.css";
import transparent_logo from "../../assets/images/everest_new_small.png";
import {useRef} from 'react'

const Header = () => {
    const emailRef = useRef(null)

    const handleSubmit = async() => {
        console.log("works?");
        if (emailRef.current != null) {
            const email = emailRef.current['value'];
            const formData = new FormData();
            formData.append('email', email);
            
            try {
                await fetch("http://localhost:8080/newEmail", {
                    method: "POST",
                    body: formData,
                })
                .then(response => response.text())
                .then(data => {
                    console.log("Message from go: ", data);
                })
                .catch(error => {
                    console.log("Error:", error);
                });
            } catch (error) {
                console.log("error occurred: ", error);
            }
        }
    }

	return (
		<div id="mission" className="everest__header section__padding">
			<div className="everest__header-content">
				<div className="everest__header-image">
					<img src={transparent_logo} alt="logo" />
				</div>

				<div className="everest__header-content__input">
					<input type="email" ref={emailRef} placeholder="Your Email Address" />
					<button onClick={handleSubmit} type="button">Get Updates</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
