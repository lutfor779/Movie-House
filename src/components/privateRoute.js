import { Col, Row, Spin } from "antd";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
	const { user, isLoading } = useAuth();
	let location = useLocation();

	if (isLoading)
		return (
			<Row justify="center" align="middle" style={{ height: "100vh" }}>
				<Col
					xs={22}
					sm={18}
					md={12}
					lg={10}
					xl={10}
					xxl={8}
					className="text-center"
				>
					<Spin size="large" />
				</Col>
			</Row>
		);

	if (user.email) {
		return children;
	}
	return <Navigate to="/auth/login" state={{ from: location }} />;
};

export default PrivateRoute;
