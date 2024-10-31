import { createContext } from "react";
import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";

export const AssetContext = createContext("gold");
const GrandFather = () => {
  const asset = "diamond";
  return (
    <div className="border-2 p-4 rounded-xl flex flex-col gap-2 justify-center items-center">
      <h2>Grand Father</h2>

      <AssetContext.Provider value="gold">
        <section className="flex  gap-2">
          <Dad asset={asset}></Dad>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default GrandFather;
