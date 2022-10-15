import { Col, Row, Input, Button, Select, Tag, Divider } from "antd";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { todoFilter, todoListSelector } from "../redux/selector";
import useDebounce from "../hooks/useDebounce";
export default function TodoList() {
  // const dispatch = useDispatch();
  const todoList = useDebounce(useSelector(todoListSelector));
  return (
    <Row className="flex-1">
      <Col span={24}>
        {todoList.length > 0 && (
          <>
            <h4 className="opacity-60">
              <span>- {todoList.length}</span> todos founded
            </h4>
            <Divider></Divider>
          </>
        )}
        {todoList.length ? (
          todoList.map((todo) => (
            <Todo key={todo.id} id={todo.id} completed={todo.completed} name={todo.name} priority={todo.priority} />
          ))
        ) : (
          <div className="text-center">No result founded!</div>
        )}
      </Col>
    </Row>
  );
}
