import { DownOutlined, LogoutOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Dropdown, Menu, Row } from "antd";
import Search from "antd/lib/input/Search";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useData from "../hooks/useData";

const Heading = () => {
	const { setMovieData, setLoading } = useData();
	const { user, logOut } = useAuth();
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const handleSearch = (title) => {
		setOpen(!open);
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
			<Row align="middle" justify="space-between">
				<Col className="text-xl font-bold text-orange-400">
					<div
						className="text-xl font-bold text-orange-400 cursor-pointer"
						onClick={() => navigate("/")}
					>
						Movie <span className="text-green-500">House</span>
					</div>
				</Col>

				<Col xs={0} md={10} lg={12}>
					<Search
						placeholder="Search movie name"
						onSearch={handleSearch}
						enterButton
						className="mt-4"
					/>
				</Col>

				<Col>
					<div className="hidden md:block">
						<Dropdown overlay={menu}>
							<a onClick={(e) => e.preventDefault()} href=" ">
								{user.displayName} <DownOutlined />
							</a>
						</Dropdown>
					</div>
					<div className="block md:hidden">
						<MenuOutlined
							style={{ color: "white" }}
							onClick={() => setOpen(!open)}
						/>
					</div>
				</Col>
			</Row>

			<Drawer
				title={user.displayName}
				placement="left"
				onClose={() => setOpen(!open)}
				visible={open}
				width={280}
			>
				<div className="h-full grid grid-cols-1 gap-4 content-between">
					<div>
						<Search
							placeholder="Search movie name"
							onSearch={handleSearch}
							enterButton
						/>
						<p className="mt-5">My Playlists</p>
					</div>
					<div>
						<Button
							type="primary"
							onClick={logOut}
							icon={<LogoutOutlined />}
						>
							LogOut
						</Button>
					</div>
				</div>
			</Drawer>
		</div>
	);
};

export default Heading;
