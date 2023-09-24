import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MainBody from "./components/MainBody/MainBody";
import Header from "./components/Header/Header";

function App() {
	return (
		<div className="appContainer">
			<div className="gradient__bg">
				<NavBar />
				<Header />
			</div>
			<MainBody></MainBody>
		</div>
	);
}

export default App;
