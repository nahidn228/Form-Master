import "./App.css";

import GrandFather from "./Components/GrandFa/GrandFather";
// import ReUsableForm from "./Components/ReUsableForm/ReUsableForm";
// import HookForm from "./Components/HookForm/HookForm";
// import RefForm from "./Components/RefForm/RefForm";
// import StateFullForm from "./Components/SimpleForm/StateFullForm";
// import SimpleForm from "./Components/SimpleForm/SimpleForm";

function App() {


  // const handleSignUp = data =>{
  //   console.log('Sign Up', data)
  // }
  // const handleSignIn = data =>{
  //   console.log('Sign In', data)
  // }
  // const handleUpdateProfile = data =>{
  //   console.log('Update Profile', data)
  // }

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <GrandFather></GrandFather>
        {/* <SimpleForm></SimpleForm> */}
        {/* <StateFullForm></StateFullForm> */}
        {/* <RefForm></RefForm> */}
        {/* <HookForm></HookForm> */}
      {/* <ReUsableForm handleSubmit={handleSignUp} formTitle={'Sign Up'}></ReUsableForm>
      <ReUsableForm handleSubmit={handleUpdateProfile} formTitle={'Update Profile'} submitBtnTitle={'Update'}></ReUsableForm>
      <ReUsableForm handleSubmit={handleSignIn} formTitle={'Sign In'} submitBtnTitle={'Login'}></ReUsableForm> */}
      </div>
    </>
  );
}

export default App;
