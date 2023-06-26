import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import TitleBar from "./components/TitleBar";
import Experience from "./pages/Experience";
import "./App.sass";
import "overlayscrollbars/overlayscrollbars.css";
import {
	OverlayScrollbars,
	ScrollbarsAutoHideBehavior,
	ScrollbarsHidingPlugin,
	SizeObserverPlugin,
	ClickScrollPlugin,
} from "overlayscrollbars";
import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile,
} from "react-device-detect";
import FooterBar from "./components/FooterBar";

function App() {
	// Only render scrollbar if not mobile
	if (!isMobile) {
		const osInstance = OverlayScrollbars(document.body, {
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
				visibility: "hidden",
				autoHide: "move",
				autoHideDelay: 1300,
				dragScroll: true,
				clickScroll: false,
				pointers: ["mouse", "touch", "pen"],
			},
		});
	}

	const [activeTab, setActiveTab] = useState("home");

	const handleTabClick = (tabName: string) => {
		setActiveTab(tabName);
	};

	return (
		<div className="App">
			<BrowserRouter>
				<TitleBar activeTab={activeTab} onTabClick={handleTabClick} />
				<div id="stars"></div>
				<div id="stars2"></div>
				<div id="stars3"></div>
				<div className="app-pages">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/experience" element={<Experience />} />
					</Routes>
				</div>
			</BrowserRouter>
			<FooterBar />
		</div>
	);
}

export default App;
