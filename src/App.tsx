import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Members from "./components/Members/Members";

function App() {
	return (
		<div className="appContainer">
			<div className="img_div">
				<NavBar />
				<Header />
			</div>
			<About />
			<Events />
			<Members />
		</div>
	);
}

export default App;
