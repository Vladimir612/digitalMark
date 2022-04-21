import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const AdminInfoContext = React.createContext();

export const useAdminInfo = () => {
  return useContext(AdminInfoContext);
};

export const AdminInfoProvider = ({ children }) => {
  const [adminInfo, setAdminInfo] = useState({});

  async function fetchAdminInfo(prosledjenEmail, prosledjenaLozinka) {
    try {
      const res = await axios.post(
        "https://digitalmark6.herokuapp.com/api/auth/login",
        {
          email: prosledjenEmail,
          password: prosledjenaLozinka,
        }
      );

      setAdminInfo(res.data.user);

      return { msg: "success", res };
    } catch (err) {
      return { msg: "failed", err };
    }
  }

  let navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      navigate("/dashboard");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AdminInfoContext.Provider
      value={{ adminInfo, fetchAdminInfo, setAdminInfo }}
    >
      {children}
    </AdminInfoContext.Provider>
  );
};
