import React from "react";
const Login = () => {
  return (
    <div className="Login">
      <main>
        <h1>Inboundsys login/signup</h1>

        <form className="page">
          <div className="inside">
            <label>Username</label>
            <input type="text" required placeholder="Abc" />
          </div>

          <div className="inside">
            <label>Password</label>
            <input type="email" required placeholder="Abc@xyz" />
          </div>
          

          <button type="Login">Login</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
