import { Button, Input } from "antd";
import "./App.less";
const { Search } = Input;
function App() {
	return (
		<div className="App">
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
		</div>
	);
}

export default App;
