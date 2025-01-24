import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../component/api";

function Sigin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [massage, setMassage] = useState("");
  const [alertClass, setAlertClass] = useState(["d-none"]);
  const navigate = useNavigate();
  const sigin = (e) => {
    e.preventDefault();
    if (confirmationPassword === password) {
      api
        .post("/sigin", {
          username: username,
          email: email,
          password: password,
          confirmationPassword: confirmationPassword,
        })
        .then((result) => {
          if (result.data.massage === "success create account") {
            setAlertClass(["d-block", "alert-success"]);
            setTimeout(() => {
              navigate("/verify");
            }, 1000);
          } else {
            setAlertClass(["d-block", "alert-danger"]);
          }
          setMassage(result.data.massage);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setAlertClass(["d-block", "alert-danger"]);
      setMassage("Wrong confirmation password");
    }
  };
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
          <h1 className="align-self-center">Sigin sans</h1>
          <div className={["alert", ...alertClass].join(" ")} role="alert">
            {massage}
          </div>
          <form onSubmit={sigin}>
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
              <label for="username" className="m-1">
                Email
              </label>
              <input
                className="form-control"
                name="Email"
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
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
            <div className="mb-3">
              <label for="password" className="">
                confirmation password
              </label>
              <input
                className="form-control"
                name="confirmationPassword"
                type="password"
                placeholder="confirmation password"
                onChange={(e) => setConfirmationPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Sigin;
