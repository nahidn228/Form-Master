/* eslint-disable react/prop-types */
import Brother from "./Brother";
import MySelf from "./MySelf";
import Sister from "./Sister";

const Dad = ({asset}) => {
  return (
    <div className="border-2 p-4 rounded-xl flex flex-col justify-center items-center">
      <h2>Dad</h2>
      <div className="flex gap-2" >
        <MySelf asset={asset}></MySelf>
        <Brother></Brother>
        <Sister></Sister>
      </div>
    </div>
  );
};

export default Dad;
