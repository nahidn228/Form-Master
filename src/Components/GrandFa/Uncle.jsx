
import Cousin from "./Cousin";


const Uncle = () => {
  // const gift = useContext(AssetContext);
  return (
    <div className="border-2 p-4 rounded-xl flex flex-col justify-center items-center">
      <h2>Uncle</h2>
      <div className="flex gap-2">
        <Cousin name={"Rafsan"}></Cousin>
        <Cousin name={"Sohana"}></Cousin>
        {/* <p> {gift}</p> */}
      </div>
    </div>
  );
};

export default Uncle;
