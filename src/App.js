import { useEffect } from "react";
import "./App.css";
import TodoHome from "./Components/TodoHome";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.authReducer);
  console.log("isAuth", isAuth);

  useEffect(() => {
    if(!isAuth) {
      navigate("/login");
    }
  }, [])

  return (
    <div className="App">
      <TodoHome />
    </div>
  );
}

export default App;
