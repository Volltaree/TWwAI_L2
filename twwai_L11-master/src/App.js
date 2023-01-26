import {BrowserRouter, Routes, Route} from "react-router-dom";
import socketIO from "socket.io-client";
import Home from "./components/home";
import Page from "./components/page";

const socket =
socketIO.connect("http://localhost:4000")
function App() {
return (
<BrowserRouter>
<div>
<Routes>
<Route path="/"
element={<Home socket={socket}/>}></Route>
<Route path="/chat"
element={<Page socket={socket}/>}></Route>
</Routes>
</div>
</BrowserRouter>
);
}