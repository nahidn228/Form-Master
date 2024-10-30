import "./App.css";
import GrandFather from "./Components/GrandFa/GrandFather";
// import ReUsableForm from "./Components/ReUsableForm/ReUsableForm";
// import HookForm from "./Components/HookForm/HookForm";
// import RefForm from "./Components/RefForm/RefForm";
// import StateFullForm from "./Components/SimpleForm/StateFullForm";
// import SimpleForm from "./Components/SimpleForm/SimpleForm";

function App() {
  // const handleSignUp = (data) => {
  //   console.log("Sign Up data", data);
  // };
  // const handleUpdateProfile = (data) => {
  //   console.log("Profile update data", data);
  // };

  return (
    <>
      <div className="flex flex-col items-center justify-center border-2">
        <GrandFather></GrandFather>
        {/* <SimpleForm></SimpleForm> */}
        {/* <StateFullForm></StateFullForm> */}
        {/* <RefForm></RefForm> */}
        {/* <HookForm></HookForm> */}
        {/* <ReUsableForm
          handleSubmit={handleSignUp}
          formTitle={"Sign Up"}
        ></ReUsableForm>
        <ReUsableForm
          formTitle={"Profile Update"}
          submitBtnTitle={"Update"}
          handleSubmit={handleUpdateProfile}
        ></ReUsableForm> */}
      </div>
    </>
  );
}

export default App;
