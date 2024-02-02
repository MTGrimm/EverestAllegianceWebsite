import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Events from "./components/Events/Events";
import Members from "./components/Members/Members";
import Contact from "./components/Contact/Contact";
import AboutNew from "./components/AboutNew/AboutNew";

function App() {
	return (
		<div className="appContainer">
			<BrowserRouter>
				<Routes>
					<Route index element={<Header />} />
					<Route path="/about" element={<AboutNew />} />
					<Route path="/events" element={<Events />} />
					<Route path="/members" element={<Members />} />
					<Route path="/registration" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
