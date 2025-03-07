import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Helmet, HelmetProvider } from "react-helmet-async";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<Helmet>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, width: fit-content;"
				/>
			</Helmet>
		</HelmetProvider>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
