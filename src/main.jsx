import { createRoot } from "react-dom/client";
import { App } from "./components/App/App.jsx";
import { restaurants } from "../materials/mock.js";

createRoot(document.getElementById("root")).render(
  <App restaurants={restaurants} />,
);
