import "./Events.css";
import NavBar from "./../NavBar/NavBar";
import stock1 from "../../assets/images/stock_dance1.jpg";
import stock2 from "../../assets/images/stock_dance2.jpg";

interface EventProps {
	name: string;
	date: string;
	description: string;
	src: string;
	link: string;
	location: string;
}

const Event = ({
	name,
	date,
	description,
	src,
	link,
	location,
}: EventProps) => {
	return (
		<div className="everest__events-event-container">
			<div className="everest__events-event">
				<h2>{name}</h2>
				<p>{date}</p>
				<img src={src} alt={name} />
				<a href={link} target="_blank">
					{location}
				</a>
			</div>
			<div className="everest__events-event-description">
				<p>{description}</p>
			</div>
		</div>
	);
};

const Events = () => {
	return (
		<div>
			<NavBar dark={false} />
			<div id="events" className="everest__events">
				<div className="everest__events-header">
					<h1 className="gradient__text">Upcoming Events</h1>
				</div>
				<div className="everest__events-container">
					<Event
						name="Mixers"
						date="2023-10-14"
						description="Tincidunt nunc pulvinar sapien et ligula ullamcorper. Commodo odio aenean sed adipiscing diam. Amet porttitor eget dolor morbi non arcu risus. Ultricies lacus sed turpis tincidunt id aliquet risus. Egestas dui id ornare arcu odio ut sem nulla. Tortor posuere ac ut consequat semper. Adipiscing vitae proin sagittis nisl. Diam vulputate ut pharetra sit amet aliquam. Vitae justo eget magna fermentum. Id interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Ornare arcu odio ut sem nulla pharetra diam.                    "
						src={stock1}
						link="https://www.google.com/maps/dir//4935%2055%20Ave%20NW"
						location="Dance Studio ~ 4935 55 Ave NW"
					/>
					<Event
						name="Dance Classes"
						date="2023-11-27"
						description="Tincidunt nunc pulvinar sapien et ligula ullamcorper. Commodo odio aenean sed adipiscing diam. Amet porttitor eget dolor morbi non arcu risus. Ultricies lacus sed turpis tincidunt id aliquet risus. Egestas dui id ornare arcu odio ut sem nulla. Tortor posuere ac ut consequat semper. Adipiscing vitae proin sagittis nisl. Diam vulputate ut pharetra sit amet aliquam. Vitae justo eget magna fermentum. Id interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Ornare arcu odio ut sem nulla pharetra diam.                    "
						src={stock2}
						link="https://www.google.com/maps/dir//4935%2055%20Ave%20NW"
						location="Dance Studio ~ 4935 55 Ave NW"
					/>
				</div>
			</div>
		</div>
	);
};

export default Events;
