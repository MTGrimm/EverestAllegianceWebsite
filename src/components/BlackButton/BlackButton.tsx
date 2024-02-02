import "./BlackButton.css";

interface ButtonProps {
	label: String;
	onClick: () => void;
	reverse?: boolean;
}

const BlackButton = ({ label, onClick, reverse = false }: ButtonProps) => {
	const customClassName = "buttonDiv " + (reverse ? "rev" : "");
	return (
		<div className={customClassName} onClick={onClick}>
			<p>{label}</p>
		</div>
	);
};

export default BlackButton;
