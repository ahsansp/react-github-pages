import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const AuthUser = (WrappedComponent) => {
  // HOC mengembalikan komponen fungsi baru
  const AuthenticatedComponent = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
      api.post("auth").catch((error) => {
        navigate("/login");
      });
    }, [navigate]);

    // Render komponen yang dibungkus jika autentikasi berhasil
    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default AuthUser;
