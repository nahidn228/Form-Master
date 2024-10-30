const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log("form submit");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input type="submit" className="btn" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
