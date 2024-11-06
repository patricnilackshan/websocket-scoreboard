import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import io from "socket.io-client";
const BACKENDPORT = 5000;

const socket = io(`http://localhost:${BACKENDPORT}`);

createRoot(document.getElementById("root")).render(<App socket={socket} />);
