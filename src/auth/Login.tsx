import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const onSubmit = (event: any) => {
    event.preventDefault();

    const userData: any = {
      email,
      password
    };
    setUser(userData);
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login</h2>
      <form
        onSubmit={onSubmit}
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center"
        }}
      >
        <input
          type="email"
          placeholder="Email"
          onChange={event => setEmail(event.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={event => setPassword(event.target.value)}
          value={password}
        />
        <button type="submit">Submit</button>
      </form>
      {user && JSON.stringify(user, null, 2)}
    </div>
  );
};

export default Login;
