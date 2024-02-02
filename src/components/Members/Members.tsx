import "./Members.css";
import NavBar from "./../NavBar/NavBar";
import arju from "../../assets/images/arju.png";
import sushant from "../../assets/images/sushant.png";
import aryan from "../../assets/images/aryan.png";
import anjil from "../../assets/images/anjil.png";
import bish from "../../assets/images/bish.png";
import paranjan from "../../assets/images/paranjan.png";
import pascal from "../../assets/images/pascal.png";
import aayush from "../../assets/images/aayush.jpg";

const Members = () => {
	const members = [
		{
			name: "Arju Baniya",
			position: "President",
			description: `I'm Arju Baniya, A 20 year old university student, with a passion for Dance, creative freedom and  With 9 Years of experience I've dedicated myself to establish this organisation as a safe haven and resource for knowledge and opportunities. For people of various racial, ethnic, and gender identities, I'm committed to staying at the forefront of Everest Allegiance and so excited to show everyone how the youths of today can create and bring changes to society. 
Thank you for visiting, and I look forward to our journey ahead.
`,
			src: arju,
		},
		{
			name: "Sushant Khanal",
			position: "Director of Finance",
			description: `I'm Sushant Khanal, currently residing in Edmonton, Alberta, Canada, and I'm dedicated to my studies in software development. Beyond coding, I'm an avid gamer, love exploring the scenic beauty of Alberta through hiking, and have a knack for creating captivating beats. While I may not have any notable achievements just yet, honesty is the cornerstone of my character, and it guides my personal and professional life.
			I'm not just flexible in the digital world; I'm also a gymnastics enthusiast, showcasing my adaptability and discipline. Looking ahead, my aspirations are as dynamic as my interests. I'm determined to become a cybersecurity expert, utilizing my software development skills and unwavering commitment to honesty to make a lasting impact.
			`,
			src: sushant,
		},
		{
			name: "Aryan Timilsina",
			position: "Head of Technology",
			description: "",
			src: aryan,
		},
		{
			name: "Aayush Pandey",
			position: "Head of Communication",
			description: `Hello there! I'm Aayush Pandey, a 21-year-old engineering student
			 with a love for problem-solving and innovation. Engineering, I believe, is a 
			 method of thinking that can alter the world for the better, not merely a topic
			  of study. I wish to bring together two opposing worlds: art and science. While
			  I am working, I want this effort and this organisation to have an influence and,
			  perhaps, reach those in need. I'm interested in integrating the art and science
			  worlds in order to reach a healthy balance. I aim to investigate and present
			  complex scientific themes in novel, visually appealing ways by combining 
			  creative expression with factual investigation. I'm hoping that through 
			  utilising the power of art, I will be able to make it  more accessible and 
			  engaging to a wider audience, fostering a better appreciation for both the 
			  beauty of nature and the innovation inherent in scientific investigation. 
			  This interdisciplinary approach not only improves scientific communication, 
			  but it also enriches the human experience by emphasising the inherent connections 
			  between these seemingly disparate domains.`,
			src: aayush,
		},
		{
			name: "Anjil Dahal",
			position: "Head of Administration",
			description: `An individual with a profound passion for photography and fashion design, I'm Anjil, I have a commitment to making the world a better place. In my professional life, I work in the field of information technology. Yet, my heart truly belongs to the arts, where I find solace and creative expression.
			When I'm not immersed in the IT world or exploring my artistic pursuits, you can find me volunteering at animal shelters, demonstrating a deep sense of compassion for our furry friends.
			My strong ties to Hinduism have instilled important values and guide my path in life. Frequent journeys to my home country of Nepal keep me connected to my roots and inspire a sense of belonging.
			`,
			src: anjil,
		},
		{
			name: "Biswash Baniya",
			position: "Head of Marketing/Design",
			description: "",
			src: bish,
		},
		{
			name: "Paranjan Baral",
			position: "Executive of Communication",
			description: `Hello, My name is Paranjan, and I'm a high school student at McNally. Understanding all languages and cultures is one of my life's inspirations since it helps me to explore new worlds through words and understand human conduct. I enjoy riding, hiking, and maths in addition to my academic interests. My life objective is to have a positive impact on the people around me and to help in whatever way I can. When I'm not reading or doing equations, you may catch me watching 'The Grand Budapest Hotel' or listening to Kanye West's 'Roses.' I like fashion and style which helps me learn the art of expressing yourself via clothes and colour. I cherish my Hindu background and am gaining new skills as a result of its teachings.`,
			src: paranjan,
		},
		{
			name: "Pascal Baral",
			position: "Executive of Recruitment",
			description: "",
			src: pascal,
		},
	];

	const generateMembers = () => {
		return members.map(
			({ name, position, /*description,*/ src }, index) => {
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
						? "everest__members-member center-align"
						: "everest__members-member center-align";
				return (
					<div key={index} className={mainClass}>
						{indexType === 1 && generateImg()}

						<div className="everest__members-member-info">
							<h1>{name}</h1>
							<h2>{position}</h2>
							{/*<p>{description}</p>*/}
						</div>
						{indexType === 0 && generateImg()}
					</div>
				);
			}
		);
	};

	return (
		<div className="bigcont">
			<NavBar dark={true} />
			<div id="members" className="everest__members section__padding">
				<div className="everest__members-header">
					<h1>Members</h1>
				</div>
				{generateMembers()}
			</div>
		</div>
	);
};

export default Members;
