import { Col, Row, Input, Button, Select, Tag, Divider } from "antd";
import Todo from "./Todo";
import { addTodo } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoFilter, todoListSelector } from "../redux/selector";
export default function TodoList() {
  const [name, setName] = useState("");
  const [prior, setPrior] = useState("medium");
  const dispatch = useDispatch();
  const todoList = useSelector(todoListSelector);
  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handlePriorChange = (value) => {
    setPrior(value);
  };
  function HandleAddTodo() {
    const HandleClick = () => {
      dispatch(
        //action
        addTodo({
          id: uuidv4(),
          name: name,
          priority: prior,
          completed: false,
        })
      );
    };
    HandleClick();
    setName("");
  }
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo key={todo.id} name={todo.name} priority={todo.priority} />
        ))}
      </Col>
      <Col span={24}>
        <Divider></Divider>
        <Input.Group compact>
          <div style={{ display: "flex", paddingBottom: "20px" }}>
            <Input onChange={handleInputName} value={name} />
            <Select
              defaultValue="Medium"
              value={prior}
              onChange={handlePriorChange}
            >
              <Select.Option value="High" label="High">
                <Tag color="red">High</Tag>
              </Select.Option>
              <Select.Option value="Medium" label="Medium">
                <Tag color="blue">Medium</Tag>
              </Select.Option>
              <Select.Option value="Low" label="Low">
                <Tag color="gray">Low</Tag>
              </Select.Option>
            </Select>
          </div>
          <Button onClick={() => HandleAddTodo()} type="primary" block>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
