import { Layout } from "antd";
import React from "react";
import Heading from "./heading";

const { Header, Content, Footer } = Layout;

const HomeLayout = ({ children }) => {
	return (
		<Layout>
			<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
				<Heading />
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
