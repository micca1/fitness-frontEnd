import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Activities from "./Activities";
import Login from "./Login";
import Register from "./Register";
import MyRoutines from "./MyRoutines";
import Routines from "./Routines";
import Navbar from "./Navbar";
export const url = "https://fitnesstrac-kr.herokuapp.com/api";

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div id="container">
      <Navbar />
      <div id="main-section">
        <Routes>
          <Route exact element={<Home />} path="/" />

          <Route exact element={<Routines />} path="/Routines" />

          <Route exact element={<MyRoutines />} path="/MyRoutines" />

          <Route exact element={<Activities />} path="/Activities" />

          <Route exact element={<Login />} path="/Login" />

          <Route
            exact
            element={
              <Register
                token={token}
                setToken={setToken}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                confirm={confirm}
                setConfirm={setConfirm}
              />
            }
            path="/Register"
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
