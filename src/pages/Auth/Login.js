import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Spin } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
	const { signInWithGoogle, signInWithEmailPassword, isLoading } = useAuth();
	const [loading, setLoading] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	const handleSubmit = (values) => {
		signInWithEmailPassword(
			values.email,
			values.password,
			location,
			navigate,
			setLoading
		);
	};

	return (
		<div>
			{isLoading && <Spin />}

			<Row
				justify="space-around"
				align="middle"
				style={{ height: "100vh" }}
			>
				<Col xs={22} sm={18} md={12} lg={10} xl={10} xxl={8}>
					<Card>
						<Form
							name="login"
							initialValues={{ remember: true }}
							onFinish={handleSubmit}
						>
							<Form.Item className="text-center">
								<Title level={3}>Login</Title>
							</Form.Item>

							<Form.Item
								name="email"
								hasFeedback
								validateFirst
								rules={[
									{
										required: true,
										message: "Please input your Email!",
									},
									{
										type: "email",
										message: "It is not the correct format",
									},
								]}
							>
								<Input
									prefix={
										<MailOutlined className="site-form-item-icon" />
									}
									placeholder="Email"
									allowClear
								/>
							</Form.Item>

							<Form.Item
								name="password"
								hasFeedback
								validateFirst
								rules={[
									{
										required: true,
										message: "Please input your Password!",
									},
								]}
							>
								<Input.Password
									prefix={
										<LockOutlined className="site-form-item-icon" />
									}
									type="password"
									placeholder="Password"
								/>
							</Form.Item>

							<Form.Item>
								<Button
									type="primary"
									htmlType="submit"
									block
									loading={loading}
									disabled={loading}
								>
									Login
								</Button>
							</Form.Item>

							<Row justify="space-between" align="middle">
								<Col>
									<Link to="/auth/register">
										Register now!
									</Link>
								</Col>
								<Col>
									<Link to="/">Cancel</Link>
								</Col>
							</Row>
						</Form>

						<Button
							type="primary"
							ghost
							block
							className="mt-3"
							onClick={() => signInWithGoogle(location, navigate)}
						>
							Login with Google
						</Button>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Login;
