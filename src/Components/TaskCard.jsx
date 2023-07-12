import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { addTaskDetails } from "../Redux/TaskReducer/action";
import { useDispatch } from "react-redux";
import { edit } from "../Redux/EditReducer/action";

const TaskCard = ({ data }) => {
    const dispatch = useDispatch();

    const handleTaskDetails = () => {
        dispatch(addTaskDetails(data));
    }

    const handleCompleted=()=>{
      let newdata ={
        status: data?.status
      }
      if(data?.status === "completed"){
        newdata.status ="not completed"
      }else {
        newdata.status ="completed"
      }
      dispatch(edit(newdata, data?._id));
    }
    // console.log("datasss", data)
  return (
    <div className="task_card" onClick={() => handleTaskDetails()}>
      <div className="task_card_title">
        <input type="checkbox" checked={data?.status === "completed"}  onChange={() => handleCompleted()}/>
        <div>{data.task}</div>
      </div>
      <BiChevronRight />
    </div>
  );
};

export default TaskCard;
