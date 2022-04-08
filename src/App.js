import { Button, Input, Menu } from "antd";
import "./App.less";
import HomeLayout from "./components/layout";

const { SubMenu } = Menu;

const { Search } = Input;

function App() {
	return (
		<div className="App">
			<HomeLayout>
				<Button type="primary">Button</Button>
				<Search
					placeholder="input search text"
					allowClear
					onSearch={(e) => console.log(e)}
					enterButton
				/>
				<p className="bg-red-100 text-xl font-bold">
					Hello this is from tailwindcss
				</p>
			</HomeLayout>
		</div>
	);
}

export default App;
