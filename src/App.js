import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.less";
import PrivateRoute from "./components/privateRoute";
import AuthProvider from "./context/AuthProvider";
import UtilitiesProvider from "./context/UtilitiesProvider";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<UtilitiesProvider>
					<BrowserRouter>
						<Routes>
							<Route
								path="/"
								element={
									<PrivateRoute>
										<Home />{" "}
									</PrivateRoute>
								}
							/>
							<Route path="/auth/login" element={<Login />} />
							<Route
								path="/auth/register"
								element={<Register />}
							/>
						</Routes>
					</BrowserRouter>
				</UtilitiesProvider>
			</AuthProvider>
		</div>
	);
}

export default App;
