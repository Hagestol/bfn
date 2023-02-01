import { render } from "preact";
import { setup } from "twind/shim";
import config from "../twind.config";
import App from "./app";

setup(config);

render(<App />, document.getElementById("app") as HTMLElement);
