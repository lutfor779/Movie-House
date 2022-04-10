import { Col, Image, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<Row justify="center" align="middle" style={{ height: "95vh" }}>
			<Col
				xs={22}
				sm={18}
				md={12}
				lg={10}
				xl={10}
				xxl={8}
				className="text-center"
			>
				<Image
					src="https://www.myphukettravel.com/assets/front-end/images/404.gif"
					alt="not found"
					preview={false}
				/>
				<Link to={"/"}>Back to Home</Link>
			</Col>
		</Row>
	);
};

export default NotFound;
