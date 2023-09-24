import "./Events.css";
import stock1 from "../../assets/images/stock_dance1.jpg";
import stock2 from "../../assets/images/stock_dance2.jpg";

interface EventProps {
	name: string;
	date: string;
	src: string;
	link: string;
	location: string;
}

const Event = ({ name, date, src, link, location }: EventProps) => {
	return (
		<div className="everest__events-event">
			<h2 className="gradient__text">{name}</h2>
			<p>{date}</p>
			<img src={src} alt={name} />
			<a href={link} target="_blank">
				{location}
			</a>
		</div>
	);
};

const Events = () => {
	return (
		<div className="everest__events section__margin gradient__bg">
			<div className="everest__events-header">
				<h1 className="gradient__text">Upcoming Events</h1>
			</div>
			<div className="everest__events-container">
				<Event
					name="Hip Hop Dance"
					date="2023-10-14"
					src={stock1}
					link="https://www.google.com/maps/dir//4935%2055%20Ave%20NW"
					location="Dance Studio ~ 4935 55 Ave NW"
				/>
				<Event
					name="Salsa Dance"
					date="2023-11-27"
					src={stock2}
					link="https://www.google.com/maps/dir//4935%2055%20Ave%20NW"
					location="Dance Studio ~ 4935 55 Ave NW"
				/>
			</div>
		</div>
	);
};

export default Events;
