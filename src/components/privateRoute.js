import { Spin } from "antd";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
	const { user, isLoading } = useAuth();
	let location = useLocation();

	if (isLoading) return <Spin size="large" />;

	if (user.email) {
		return children;
	}
	return <Navigate to="/auth/login" state={{ from: location }} />;
};

export default PrivateRoute;
