import React, { useEffect, useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { add, addTaskFilter } from "../Redux/TaskReducer/action";
import axios from "axios";
import TaskCard from "./TaskCard";
import TaskDetails from "./TaskDetails";
import Sidebar from "./Sidebar";

export default function Today() {
  const [create, setCreate] = useState("");
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { refresh: editRefresh } = useSelector((store) => store.editReducer);
  const { refresh: addRefresh } = useSelector((store) => store.taskReducer);
  const { filter } = useSelector((store) => store.taskReducer);

  console.log("refresh filter", filter);

  const handleEnterButton = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const userData = {
        task: create,
        createdAt: new Date(),
        list: "personal",
        status: "not completed",
      };
      dispatch(add(userData));
    }
  };

  useEffect(() => {
    setCreate("");
    axios.get(`http://localhost:4500/todos`).then((res) => {
      let data = res.data;
      console.log("data", data);
      if (filter) {
        console.log("inside");
        data = data?.filter((el) => el.list === filter);
      }
      console.log("filter data", data);
      setData(data);
    });
  }, [editRefresh, addRefresh, filter]);

  useEffect(() => {
    dispatch(addTaskFilter(""));
  }, [window.location.pathname]);

  return (
    <div className="mainbody">
      <Sidebar />
      <div className="task_body">
        <div>
          <h1 className="todayy">
            Today
            <div>{data?.length}</div>
          </h1>
          <div className="add">
            <form onKeyDown={(e) => handleEnterButton(e)}>
              <MdOutlineAdd className="addicon" />
              <input
                className="addInput"
                type="create"
                placeholder="Add New Task"
                value={create}
                onChange={(e) => setCreate(e.target.value)}
              />
            </form>
          </div>
          <div className="task_content">
            {data.map((data) => (
              <TaskCard key={data._id} data={data} />
            ))}
          </div>
        </div>
        <TaskDetails />
      </div>
    </div>
  );
}
