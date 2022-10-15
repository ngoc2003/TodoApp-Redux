import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import InputTodo from "./components/InputTodo";

const { Title } = Typography;

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-slate-800">
      <div className="max-w-[800px] bg-white flex rounded-md p-5 shadow-lg gap-x-10 w-full">
        <div className="flex flex-col flex-1">
          <Title className="text-center">TODO APP </Title>
          <InputTodo />
          <Filters />
          <Divider />
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
