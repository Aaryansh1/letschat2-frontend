import React, { useState, FC, ChangeEvent, FormEvent } from "react";
import styles from '../../styles/auth.module.scss';
type Props = {
  setShowAuth: (show: boolean) => void;
  setAuthMode: (show: string) => void;
}

export default function AuthSignUp({setAuthMode, setShowAuth}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Handle login logic
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div>
      <div className={styles.background} onClick={()=>{setShowAuth(false); setAuthMode("signin");}}></div>
      <div className={styles.block}>
      <h2>
      Sign Up
      </h2>
      <form className={styles.form} onSubmit={handleFormSubmit}>
          <div className={styles.formChild}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles.formChild}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className={styles.formChild}>
            <label htmlFor="password">Confirm Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className={styles.button} type="submit">
            Sign Up
          </button>
        </form>
        <div onClick={() => setAuthMode("signin")} className={styles.formFooter}>
        Already have an account? Sign In
      </div>
      </div>
      </div>
  )
}