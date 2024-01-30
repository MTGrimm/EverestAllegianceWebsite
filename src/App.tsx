import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Members from "./components/Members/Members";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<div className="appContainer">
            <BrowserRouter>
               <Routes>
                    <Route index element={<About/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/members" element={<Members/>}/>
                    <Route path="/contacts" element={<Contact/>}/>
               </Routes>
            </BrowserRouter>
		</div>
	);
}

export default App;
