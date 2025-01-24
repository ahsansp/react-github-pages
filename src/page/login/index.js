import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../component/api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [massage, setMassage] = useState("");
  const [alertClass, setAlertClass] = useState(["d-none"]);
  const BASE_API = "http://localhost:3000/api/";
  const navigate = useNavigate();
  const login = async () => {
    await fetch(BASE_API + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.massage === "success") {
          setMassage("Login Success");
          setAlertClass(["d-block", "alert-success"]);
          setTimeout(() => {
            navigate("/");
          }, 1000); // 2000 ms = 2 detik
        } else if (data.massage === "failed") {
          setMassage("Wrong Username OR Password");
          setAlertClass(["d-block", "alert-danger"]);
        }
      });
  };
  useEffect(() => {
    api
      .post("/auth")
      .then((response) => {
        console.log(response);
        if (response.data.massage === "auth success") {
          navigate("/");
        }
      })
      .catch(() => {});
  }, []);
  return (
    <>
      <div
        className="w-100 d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div
          className="p-5 d-flex flex-column border rounded"
          style={{ width: "30rem" }}
        >
          <h1 className="align-self-center">Login sans</h1>
          <div className={["alert", ...alertClass].join(" ")} role="alert">
            {massage}
          </div>
          <div className="mb-3">
            <label for="username" className="m-1">
              username
            </label>
            <input
              className="form-control"
              name="username"
              type="text"
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label for="password" className="">
              password
            </label>
            <input
              className="form-control"
              name="password"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              login();
            }}
          >
            submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
