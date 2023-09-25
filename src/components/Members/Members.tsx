import "./Members.css";
import arju from "../../assets/images/arju.png";
import aryan from "../../assets/images/aryan.png";

const Members = () => {
	const members = [
		{
			name: "Arju",
			position: "Director",
			description:
				"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
			src: arju,
		},
		{
			name: "Aryan",
			position: "Head of Technology",
			description:
				"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
			src: aryan,
		},
	];

	const generateMembers = () => {
		return members.map(({ name, position, description, src }, index) => {
			const generateImg = () => {
				return (
					<div className="everest__members-member-image">
						<img src={src} alt={name} />
					</div>
				);
			};
			return (
				<div key={index} className="everest__members-member">
					{index % 2 === 1 && generateImg()}

					<div className="everest__members-member-info">
						<h1 className="gradient__text">{name}</h1>
						<h2>{position}</h2>
						<p>{description}</p>
					</div>
					{index % 2 === 0 && generateImg()}
				</div>
			);
		});
	};

	return (
		<div className="everest__members gradient__bg section__padding">
			<div className="everest__members-header">
				<h1 className="gradient__text">Members</h1>
			</div>
			{generateMembers()}
		</div>
	);
};

export default Members;
