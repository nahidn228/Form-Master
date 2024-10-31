import { useContext } from "react";
import Cousin from "./Cousin";
import { AssetContext } from "./GrandFather";

const Aunty = () => {
  const gift = useContext(AssetContext);
  return (
    <div className="border-2 p-4 rounded-xl flex flex-col justify-center items-center">
      <h2>Aunty</h2>
      <div className="flex gap-2">
        {gift}
        <Cousin name={"Mamshad"}></Cousin>
        <Cousin name={"Rubaiya"}></Cousin>
      </div>
    </div>
  );
};

export default Aunty;
