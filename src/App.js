import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SharedProductLayout from "./pages/SharedProductLayout";

function App() {
	const [user, setUser] = useState(null);

	return (
		// for connection with the browser
		<BrowserRouter>
			{/* parent of all the routes */}
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="products" element={<SharedProductLayout />}>
						<Route index element={<Products />} />
						<Route path=":productId" element={<SingleProduct />} />
					</Route>
					<Route path="login" element={<Login setUser={setUser} />} />

					{/* wrap Dashboard in the ProtectedRoute, in order to navigate to login page when someone tries to manually type the url into dashboard site.  */}
					<Route
						path="dashboard"
						element={
							<ProtectedRoute user={user}>
								<Dashboard user={user} />
							</ProtectedRoute>
						}
					/>

					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
