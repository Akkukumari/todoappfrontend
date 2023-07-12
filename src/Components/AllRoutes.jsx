import React from "react";
import { Route, Routes } from "react-router-dom";
import Today from "./Today";
import Upcoming from "./Upcoming";
import Login from "./Login";
import Signup from "./Signup";
import { PrivateRoute } from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/upcoming"
          element={
            <PrivateRoute>
              <Upcoming />
            </PrivateRoute>
          }
        />
        <Route
          path="/today"
          element={
            <PrivateRoute>
              <Today />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
