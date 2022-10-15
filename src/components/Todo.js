import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { completedTodo } from "../redux/actions";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};
export default function Todo({ name, priority, completed, id }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(
      completedTodo({
        id: id,
        completed: !checked,
      })
    );
  };
  return (
    <Row
      justify="space-between"
      className={`mb-4 ${checked && "opacity-50 line-through"}`}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
