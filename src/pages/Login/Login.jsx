import React, { useEffect, useState } from "react";
import "./Login.scss";
import Lopta from "./../../Utilities/Lopta/Lopta";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAdminInfo } from "./../../data/adminInfoContext";

const Login = () => {
  const [errorPoruka, setErrorPoruka] = useState("");
  const [email, setEmail] = useState("");
  const [lozinka, setLozinka] = useState("");
  const { fetchAdminInfo, adminInfo } = useAdminInfo();
  let navigate = useNavigate();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeLozinka = (event) => {
    setLozinka(event.target.value);
  };

  const handlePrijava = async () => {
    if (email !== "" && lozinka !== "") {
      const fetched = await fetchAdminInfo(email, lozinka);

      if (fetched.msg === "success") {
        setErrorPoruka("");
        window.localStorage.setItem("token", fetched.res.data.token);
        navigate("/dashboard");
      } else {
        setErrorPoruka(JSON.stringify(fetched.err.response.data.message));
      }
    } else {
      setErrorPoruka("Oba polja su obavezna");
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h1 className="form-heading">Sign in</h1>
        <form className="login-form">
          <input
            type="email"
            value={email}
            onChange={handleChangeEmail}
            className={errorPoruka !== "" && email === "" ? "error" : ""}
            placeholder="Email"
          />
          <input
            type="password"
            placeholder="Password"
            value={lozinka}
            onChange={handleChangeLozinka}
            className={errorPoruka !== "" && lozinka === "" ? "error" : ""}
          />
          <div className="error-poruka">{errorPoruka}</div>

          <motion.button
            className="dugme crveno"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={(e) => {
              e.preventDefault();
              console.log("evo me");
              handlePrijava();
            }}
          >
            Sign in
          </motion.button>
        </form>
      </div>

      <div className="lopte">
        <div className="prva-grupa">
          <Lopta boja="bela" width="3rem" height="3rem" />
          <Lopta boja="crvena" width="5rem" height="5rem" />
        </div>
        <div className="druga-grupa">
          <Lopta boja="bela" width="6.5rem" height="6.5rem" />
          <Lopta boja="crvena" width="14rem" height="14rem" />
        </div>
        <div className="treca-grupa">
          <Lopta boja="transparentna" width="4.5rem" height="4.5rem" />
          <Lopta boja="crvena" width="5rem" height="5rem" />
        </div>
      </div>
    </div>
  );
};

export default Login;
