import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Medlemmer from "./pages/medlemmer";
import Resultat from "./pages/resultat";

export default createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/medlemmer",
		element: <Medlemmer />,
	},
	{
		path: "/resultat",
		element: <Resultat />,
	},
]);
