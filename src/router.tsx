import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/medlemmer";
import OmOss from "./pages/resultat";

export default createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/medlemmer",
		element: <TestPage />,
	},
	{
		path: "/omoss",
		element: <OmOss />,
	},
]);
