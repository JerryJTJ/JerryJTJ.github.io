import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import TitleBar from "./components/TitleBar";
import Experience from "./pages/Experience";
import "./App.sass";
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbars } from "overlayscrollbars";
import { isMobile } from "react-device-detect";
import FooterBar from "./components/FooterBar";
import NotFound from "./pages/NotFound";

function App() {
	// Scrollbar, only render scrollbar if not mobile
	if (!isMobile) {
		OverlayScrollbars(document.body, {
			paddingAbsolute: false,
			showNativeOverlaidScrollbars: false,
			update: {
				elementEvents: [["img", "load"]],
				debounce: [0, 33],
				attributes: null,
				ignoreMutation: null,
			},
			overflow: {
				x: "scroll",
				y: "scroll",
			},
			scrollbars: {
				theme: "os-theme-dark",
				visibility: "auto",
				autoHide: "move",
				autoHideDelay: 1300,
				dragScroll: true,
				clickScroll: false,
				pointers: ["mouse", "touch", "pen"],
			},
		});
	}

	return (
		<div className="App">
			<div id="stars"></div>
			<div id="stars2"></div>
			<div id="stars3"></div>

			{/* Routing */}
			<HashRouter>
				<TitleBar />

				<Routes>
					<Route index element={<Home />} />
					<Route path="projects" element={<Projects />} />
					<Route path="contact" element={<Contact />} />
					<Route path="experience" element={<Experience />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</HashRouter>

			<FooterBar />
		</div>
	);
}

export default App;
