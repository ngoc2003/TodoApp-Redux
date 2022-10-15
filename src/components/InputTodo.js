import { Button, Col, Divider, Input, Select, Tag, notification } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { notiConfig } from "./Notification";


const InputTodo = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [prior, setPrior] = useState("Medium");
  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handlePriorChange = (value) => {
    setPrior(value);
  };
  function HandleAddTodo() {
    const HandleClick = () => {
      if (!name.length) {
        notification.error(notiConfig.addError);
      } else {
        dispatch(
          //action
          addTodo({
            id: uuidv4(),
            name: name,
            priority: prior,
            completed: false,
          })
        );
        notification.success(notiConfig.addSuccess);

      }
    };
    HandleClick();
    setName("");
  }
  return (
    <Col>
      <Input.Group compact>
        <div style={{ display: "flex", paddingBottom: "20px" }}>
          <Input
            onChange={handleInputName}
            value={name}
            placeholder="Add todo here"
          />
          <Select value={prior} onChange={handlePriorChange}>
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
  );
};

export default InputTodo;
