import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Events from "./components/Events/Events";

function App() {
	const [showHeader, setShowHeader] = useState(true);
	const [showAbout, setShowAbout] = useState(true);
	const [showEvents, setShowEvents] = useState(true);
	const [showMembers, setShowMembers] = useState(true);
	const [showContact, setShowContact] = useState(true);

	return (
		<div className="appContainer">
			<div className="gradient__bg">
				<NavBar />
				{showHeader && <Header />}
			</div>
			{showAbout && <About />}
			{showEvents && <Events />}
		</div>
	);
}

export default App;
