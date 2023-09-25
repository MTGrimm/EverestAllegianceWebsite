import "./Members.css";
import arju from "../../assets/images/arju.png";
import sushant from "../../assets/images/sushant.png";
import aryan from "../../assets/images/aryan.png";
import anjil from "../../assets/images/anjil.png";
import bish from "../../assets/images/bish.png";
import paranjan from "../../assets/images/paranjan.png";
import pascal from "../../assets/images/pascal.png";

const Members = () => {
	const members = [
		{
			name: "Arju Baniya",
			position: "President",
			description:
				"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
			src: arju,
		},
		{
			name: "Sushant Khanal",
			position: "Director of Finance",
			description:
				"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
			src: sushant,
		},
		{
			name: "Aryan Timilsina",
			position: "Head of Technology",
			description:
				"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
			src: aryan,
		},
		{
			name: "Anjil Dahal",
			position: "Head of Administration",
			description:
				"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
			src: anjil,
		},
		{
			name: "Biswash Baniya",
			position: "Head of Marketing/Design",
			description:
				"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
			src: bish,
		},
		{
			name: "Paranjan Baral",
			position: "Executive of Communication",
			description:
				"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
			src: paranjan,
		},
		{
			name: "Pascal Baral",
			position: "Executive of Recruitment",
			description:
				"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
			src: pascal,
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

			const indexType = index % 2;
			const mainClass =
				indexType === 0
					? "everest__members-member left-align"
					: "everest__members-member right-align";
			return (
				<div key={index} className={mainClass}>
					{indexType === 1 && generateImg()}

					<div className="everest__members-member-info">
						<h1 className="gradient__text">{name}</h1>
						<h2>{position}</h2>
						<p>{description}</p>
					</div>
					{indexType === 0 && generateImg()}
				</div>
			);
		});
	};

	return (
		<div
			id="members"
			className="everest__members gradient__bg section__padding"
		>
			<div className="everest__members-header">
				<h1 className="gradient__text">Members</h1>
			</div>
			{generateMembers()}
		</div>
	);
};

export default Members;
