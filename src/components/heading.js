import { LoginOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import Search from "antd/lib/input/Search";
import React from "react";
import useUtilites from "../hooks/useUtilites";

const Heading = () => {
	const { movieData } = useUtilites();
	console.log(movieData);
	const handleSearch = (e) => {
		console.log(e);
	};
	return (
		<div className="container mx-auto">
			<Row gutter={16} align="middle" justify="space-between">
				<Col className="text-xl font-bold text-orange-400">
					<div className="text-xl font-bold text-orange-400">
						Movie <span className="text-green-500">House</span>
					</div>
				</Col>

				<Col>
					<Search
						placeholder="input search text"
						allowClear
						onSearch={handleSearch}
						enterButton
						className="mt-4"
					/>
				</Col>

				<Col>
					<Button type="primary" icon={<LoginOutlined />}>
						Login
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default Heading;
