import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

const { Title } = Typography;

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800 p-8">
      <div className="w-[500px] flex bg-white flex-col rounded-md p-5 shadow-lg ">
        <Title className="text-center">TODO APP </Title>
        <Filters />
        <Divider />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
