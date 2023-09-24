import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Events from "./components/Events/Events";

function App() {
	return (
		<div className="appContainer">
			<div className="gradient__bg">
				<NavBar />
				<Header />
			</div>
			<About />
			<Events />
		</div>
	);
}

export default App;
