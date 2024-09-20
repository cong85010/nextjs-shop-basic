"use client";
import React, { createContext, useEffect, useState } from "react";
import { AuthContext } from "./Context";

export default function Auth({ children }) {
  // auth
  const [user, setUser] = useState({});
  const [isLoginedIn, isLoggedIn] = useState(false);

  const handleLoggedIn = (user) => {
    setUser(user);
    isLoggedIn(true);

    if (user?.token) {
      localStorage.setItem("token", user.token);
      localStorage.setItem("refreshToken", user.refreshToken);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      /* providing token in bearer */
      fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.id) {
            handleLoggedIn(data);
          }
        });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoginedIn,
        onLogin: handleLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
