/* eslint-disable react/prop-types */
const ReUsableForm = ({
  formTitle,
  handleSubmit,
  submitBtnTitle = "Submit",
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div className="space-y-2">
      <h2 className="font-medium text-xl"> {formTitle} </h2>
      <form onSubmit={handleLocalSubmit} className="space-y-2">
        <input
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
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input type="submit" className="btn" value={submitBtnTitle} />
      </form>
    </div>
  );
};

export default ReUsableForm;
