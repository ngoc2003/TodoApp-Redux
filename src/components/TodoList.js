import { Col, Row, Divider, notification } from "antd";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { todoListSelector } from "../redux/selector";
import useDebounce from "../hooks/useDebounce";
import { notiConfig } from "./Notification";
export default function TodoList() {
  const todoList = useDebounce(useSelector(todoListSelector));
  useEffect(() => {
    notification.success(notiConfig.loadSuccess);
  }, []);
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
            <Todo
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              name={todo.name}
              priority={todo.priority}
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            No result founded!
          </div>
        )}
      </Col>
    </Row>
  );
}
