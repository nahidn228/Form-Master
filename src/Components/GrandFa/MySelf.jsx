/* eslint-disable react/prop-types */
import Special from "./Special";


const MySelf = ({asset}) => {
  return (
    <div className="border-2 p-4 rounded-xl">
      <h2>MySelf</h2>
      <Special asset={asset}></Special>
    </div>

  );
};

export default MySelf;