import React, { useState } from "react";

export default function LoginPage() {
  const [name, setName] = useState();

  const [password, setPassword] = useState("");

  const [displayName, setDisplayName] = useState();

  const [displayPassword, setDisplayPassword] = useState();

  function handleSubmitButton(event) {
    event.preventDefault();

    setDisplayName(name);

    setDisplayPassword(password);

    setName("");

    setPassword("");
  }
  return (
    <>
      <form onSubmit={handleSubmitButton}>
        <div>
          <label for="name">Name : </label>
          <input
            id="name"
            placeHolder="Enter the name"
            onChange={(event) => {
              setName(event.target.value);
              setDisplayName("");
            }}
            value={name}
          />
        </div>

        <div>
          <label for="password">Password : </label>
          <input
            id="password"
            type="password"
            placeHolder="Enter the password"
            onChange={(event) => {
              setPassword(event.target.value);
              setDisplayPassword("");
            }}
            value={password}
          />
        </div>

        <button type="submit">submit</button>
      </form>

      <div>
        <p>Name : {displayName}</p>
        <p>Password : {displayPassword}</p>
      </div>
    </>
  );
}
