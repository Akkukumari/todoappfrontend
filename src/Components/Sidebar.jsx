import React from "react";
import "../App.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { SiTodoist } from "react-icons/si";
import { GiCalendar } from "react-icons/gi";
import { PiSquaresFourFill } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { addTaskFilter } from "../Redux/TaskReducer/action";
import { useDispatch } from "react-redux";

export default function Sidebar() {
  const dispatch = useDispatch();

  const handleFilter = (filter) => {
    dispatch(addTaskFilter(filter));
  };

  return (
    <div className="sidebarBody">
      <div className="upperText">Menu</div>
      <input className="search" type="text" placeholder="Search" />

      <div className="task">TASKS</div>

      <div className="allTask">
        <div className="upcom">
          {" "}
          <MdKeyboardDoubleArrowRight className="upcoming" />
          <Link to="/upcoming">Upcoming</Link>
        </div>
        <div className="tod">
          {" "}
          <SiTodoist className="today" /> <Link to="/today">Today</Link>
        </div>
        <div className="cale">
          {" "}
          <GiCalendar className="calendar" />
          Calendar
        </div>

        <div className="task">FILTER</div>

        <div className="allTask">
          <a href="#">
            <div className="upcom" onClick={() => handleFilter("personal")}>
              {" "}
              <BsFillPersonFill className="upcoming" />
              Personal
            </div>
          </a>
          <a href="#">
            <div className="tod" onClick={() => handleFilter("work")}>
              {" "}
              <PiSquaresFourFill className="today" />
              Work
            </div>
          </a>

          <div className="sign">
            {" "}
            <GoSignOut className="signout" />
            Sign out
          </div>
        </div>
      </div>
    </div>
  );
}
