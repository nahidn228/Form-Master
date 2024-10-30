import { useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          type="text"
          name="name"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input
          ref={emailRef}
          type="text"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder=""
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input type="submit" className="btn" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
