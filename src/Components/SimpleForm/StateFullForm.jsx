import { useState } from "react";
const StateFullForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleForm = (event) => {
    event.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 character");
    } else {
      setError("");
      console.log(name);
      console.log(email);
      console.log(password);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    //console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleForm} className="flex flex-col gap-2">
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          onChange={handleEmailChange}
          type="text"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />

        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
          required
        />
        {error && (
          <small>
            <p>{error}</p>
          </small>
        )}

        <input type="submit" className="btn" value="Submit" />
      </form>
    </div>
  );
};

export default StateFullForm;
