import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import QuestionForm from "./QuestionForm";


const Dashboard = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/loggedin", {
        withCredentials: true,
      })
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data.user));
        setLoggedInUser(res.data.user);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const logout = (e) => {
    axios
      .get("http://localhost:8000/api/users/logout", { withCredentials: true })
      .then((res) => {
        console.log(res);
        navigate("/");
        localStorage.clear()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <h1>Hello {loggedInUser.firstName}</h1>
          <h1>Hello {loggedInUser._id}</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <h1>Please log in first</h1>
      )}
      {/* <QuestionForm /> */}
    </div>
  );
};

export default Dashboard;
