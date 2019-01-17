import React, { useState } from "react";

const initialFormState = { username: "", email: "", password: "" };

const Register = () => {
  const [form, setForm] = useState(initialFormState);
  const [user, setUser] = useState(null);

  const onSubmit = (event: any) => {
    event.preventDefault();
    setUser(form as any);
    setForm(initialFormState);
  };

  const onChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Register</h2>
      <form
        onSubmit={onSubmit}
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center"
        }}
      >
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={onChange}
          value={form.username}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={onChange}
          value={form.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={onChange}
          value={form.password}
        />

        <button type="submit">Submit</button>
      </form>
      {user && JSON.stringify(user, null, 2)}
    </div>
  );
};

export default Register;
