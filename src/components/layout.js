import { Layout, Menu } from "antd";
import React from "react";

const { Header, Content, Footer } = Layout;

const HomeLayout = ({ children }) => {
	return (
		<Layout>
			<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={["2"]}
				>
					<Menu.Item key="1">nav 1</Menu.Item>
					<Menu.Item key="2">nav 2</Menu.Item>
					<Menu.Item key="3">nav 3</Menu.Item>
				</Menu>
			</Header>
			<Content
				className="site-layout"
				style={{ padding: "0 50px", marginTop: 64 }}
			>
				<div
					className="site-layout-background"
					style={{ padding: 24, minHeight: "85vh" }}
				>
					{children}
				</div>
			</Content>
			<Footer style={{ textAlign: "center" }}>
				Movie House ©2022 Created by Md. Lutfor Rahman
			</Footer>
		</Layout>
	);
};

export default HomeLayout;
