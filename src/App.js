import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.less";
import AuthProvider from "./context/AuthProvider";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/auth/login" element={<Login />} />
						<Route path="/auth/register" element={<Register />} />
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
