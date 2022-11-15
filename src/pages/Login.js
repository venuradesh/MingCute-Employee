import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const naviagte = useNavigate();
  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");
  const [empData, setEmpData] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    axios
      .get("https://0895-123-231-61-157.in.ngrok.io/employee-list")
      .then((response) => {
        setEmpData(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const login = () => {
    if (empId && password) {
      let found = empData.find((emp) => {
        if (emp["id"] === empId) {
          return true;
        }
        return false;
      });

      if (found) {
        naviagte(`/employee/${empId}`);
      }
    } else {
      setErr("EmpId and Password required");
    }
  };

  return (
    <div className="row login_page ">
      <div className="col-md-5 text-center log_left h-100 d-flex align-items-center justify-content-center ">
        <div>
          <h3 className="mb-4 light_text">Welcome To Trash-Pot</h3>
          <img width="90%" height="auto" src="/mainIcons/login-logo.png" alt="log0" />
        </div>
      </div>
      <div className="col-md-7 log_rgt h-100 d-flex align-items-center justify-content-center">
        <div className="text-center login_card secondary_text ">
          <h6 className="secondary_text mb-4">Sign In</h6>
          <input type="text" className="log_input form-control my-5 " placeholder="Employee ID" onChange={(e) => setEmpId(e.target.value)} />
          <input type="password" className="log_input form-control my-5" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          {err ? <p>{err}</p> : <></>}
          <button className="btn my-5" onClick={login}>
            Sign-In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
