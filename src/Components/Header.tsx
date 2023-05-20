import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/header.module.scss";
import AuthOverview from "./authentication/AuthOverview";

function Header() {
  const [userdata, setUserData] = useState(null);
  const [authMode, setAuthMode] = useState("");
  const [showAuth, setShowAuth] = useState(false);
  useEffect(() => {
    const data = localStorage.getItem("userdata");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, [userdata]);
  return (
    <div className={styles.header}>
      {" "}
      <Image
        style={{
          borderRadius: "9999%",
          marginTop: "2px",
        }}
        width={65}
        height={65}
        src="/letschatLOGO.jpg"
        alt=""
      />
      <div className={styles.heading}>
        <h3>Let&apos;s Chat</h3>
        <p>A place where everyone can open up</p>
      </div>
      <div
        className={`${userdata ? styles.displayNone : styles.signInLogout}`}
        onClick={() => {
          setAuthMode("signin");
          setShowAuth(true);
        }}
      >
        Sign In
      </div>
      <div className={`${userdata ? styles.signInLogout : styles.displayNone}`}>
        Logout
      </div>
      {showAuth ? (
        <AuthOverview
          authMode={authMode}
          setAuthMode={setAuthMode}
          showAuth={showAuth}
          setShowAuth={setShowAuth}
        />
      ) : null}
    </div>
  );
}

export default Header;
