import "./Subscribe.css";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Subscribe = () => {
	const emailRef = useRef(null);
	const notification = (response: string) => toast(response);
	const handleSubmit = async () => {
		console.log("works?");
		if (emailRef.current != null) {
			const email = emailRef.current["value"];
			const formData = new FormData();
			formData.append("email", email);

			try {
				await fetch("https://localhost:8080/newEmail", {
					method: "POST",
					body: formData,
				})
					.then((response) => response.text())
					.then((data) => {
						console.log(data);
						notification(data);
					})
					.catch((error) => {
						console.log("Error:", error);
					});
			} catch (error) {
				console.log("error occurred: ", error);
			}
		}
	};

	return (
		<div>
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<div className="everest__header-content__input">
				<input
					type="email"
					ref={emailRef}
					placeholder="Your Email Address"
				/>
				<button onClick={handleSubmit} type="button">
					Get Updates
				</button>
			</div>
		</div>
	);
};

export default Subscribe;
