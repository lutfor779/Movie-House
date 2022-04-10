import { Layout } from "antd";
import React from "react";
import Heading from "./heading";

const { Header, Content, Footer } = Layout;

const HomeLayout = ({ children }) => {
	return (
		<Layout className="bg-img">
			<Layout className="bg-color">
				<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
					<Heading />
				</Header>

				<Content
					className="container mx-auto px-5"
					style={{ marginTop: 64 }}
				>
					<div style={{ minHeight: "85vh" }}>{children}</div>
				</Content>

				<Footer style={{ textAlign: "center" }}>
					Movie House ©2022 Created by{" "}
					<a
						href="https://my-portfolio-e2e64.web.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Md. Lutfor Rahman
					</a>
				</Footer>
			</Layout>
		</Layout>
	);
};

export default HomeLayout;
