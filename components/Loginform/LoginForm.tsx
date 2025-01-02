import React, { useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import Button from "../Button/Button";
import { loginUser } from "@/api/user";
import { AxiosError } from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [isLogginIn, setLogginIn] = useState(false);
  const router = useRouter();

  const onLogin = async () => {
    try {
      setLogginIn(true);

      const userData = {
        email: email,
        password: password,
      };

      const response = await loginUser(userData);

      if (response.status === 200) {
        setLogginIn(false);
        setError(false);
        cookie.set("jwt_token", response.data.token);
        router.push("/");
      }

      console.log(response);
    } catch (err) {
      const error = err as AxiosError;
      setLogginIn(false);

      if (error.status === 401) {
        console.log("Login failed");
        setError(true);
      }
      console.log(err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button title="Login" onClick={onLogin} isLoading={isLogginIn} />

      <div>{isError && <>Login failed</>}</div>
    </div>
  );
};

export default LoginForm;
