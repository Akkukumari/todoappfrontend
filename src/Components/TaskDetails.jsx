import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, edit } from "../Redux/EditReducer/action";

export default function TaskDetails() {
  const { taskDetails } = useSelector((store)=>store.taskReducer);
  // console.log("taskDetails", taskDetails);
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const hadleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleEdit = () => {
    dispatch(edit(data, taskDetails?._id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo( taskDetails?._id));
  }
  return (
    <div className='taskDetail'>
      <h2 className='tasky'>Task</h2>
       <div className='subTask'>{taskDetails.task}</div>

        
       <form action="/action_page.php">
       <textarea className='desc' rows="4" cols="50" name="description"value={data?.description}
        onChange={hadleChange}>Description</textarea>
        </form>

       <div className='listSection'>
        <h4 className='list'>List</h4>
        <select  className='select' placeholder='Select option'  type="text" name="list"
        value={data?.list} onChange={hadleChange}>

        <option value='personal'>Personal</option>
        <option value='work'> Work</option>
        </select>
       </div>

       <div className='listSection'>
        <h4 className='list'>Due date</h4>
        <input className='select' type='date' name="createdAt"
        value={data?.createdAt} onChange={hadleChange}/>
       </div>

       <div className='endSection'>
        <button className='button'onClick={() => handleDelete()}>Delete</button>
        <button className='button' onClick={() => handleEdit()}> Save changes</button>
       </div>
    </div>
  )
}
