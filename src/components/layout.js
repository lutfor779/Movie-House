import { LoginOutlined } from "@ant-design/icons";
import { Button, Col, Layout, Row } from "antd";
import Search from "antd/lib/input/Search";
import React from "react";

const { Header, Content, Footer } = Layout;

const HomeLayout = ({ children }) => {
	return (
		<Layout>
			<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
				<div className="container mx-auto">
					<Row gutter={16} align="middle" justify="space-between">
						<Col className="text-xl font-bold text-orange-400">
							<div className="text-xl font-bold text-orange-400">
								Movie{" "}
								<span className="text-green-500">House</span>
							</div>
						</Col>

						<Col>
							<Search
								placeholder="input search text"
								allowClear
								onSearch={(e) => console.log(e)}
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
			</Header>

			<Content className="container mx-auto" style={{ marginTop: 64 }}>
				<div style={{ minHeight: "85vh" }}>{children}</div>
			</Content>

			<Footer style={{ textAlign: "center" }}>
				Movie House ©2022 Created by Md. Lutfor Rahman
			</Footer>
		</Layout>
	);
};

export default HomeLayout;
