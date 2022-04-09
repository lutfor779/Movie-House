import { DownOutlined } from "@ant-design/icons";
import { Col, Dropdown, Menu, Row } from "antd";
import Search from "antd/lib/input/Search";
import axios from "axios";
import React from "react";
import useAuth from "../hooks/useAuth";
import useData from "../hooks/useData";

const Heading = () => {
	const { setMovieData, setLoading } = useData();
	const { user, logOut } = useAuth();

	const handleSearch = (title) => {
		setLoading(true);
		axios.get(`${process.env.REACT_APP_API_URL}&t=${title}`).then((res) => {
			setMovieData(res.data);
			setLoading(false);
		});
	};

	const menu = (
		<Menu>
			<Menu.Item key={1}>My PlayList</Menu.Item>

			<Menu.Item key={2} danger>
				<span onClick={logOut}>LogOut</span>
			</Menu.Item>
		</Menu>
	);
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
						placeholder="Search movie name"
						onSearch={handleSearch}
						enterButton
						className="mt-4"
					/>
				</Col>

				<Col>
					<Dropdown overlay={menu}>
						<a onClick={(e) => e.preventDefault()} href=" ">
							{user.displayName} <DownOutlined />
						</a>
					</Dropdown>
				</Col>
			</Row>
		</div>
	);
};

export default Heading;
