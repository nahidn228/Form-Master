import useInputState from "../Hooks/useInputState";

const HookForm = () => {
  // const [name, handleNameChange] = useInputState("rojoni");
  const nameState = useInputState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("form data", name);
    console.log(nameState.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        /> */}
        <input
          {...nameState}
          type="text"
          name="name"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input
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

export default HookForm;
