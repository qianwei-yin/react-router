import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user }) => {
	if (!user) return <Navigate to="/login" />;

	// if type into a name, then go to children.
	// that is the <Dashboard /> in App.js
	return children;
};

export default ProtectedRoute;
