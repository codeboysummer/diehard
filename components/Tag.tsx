import React from "react";
import {Tab} from "./home/Tab";
interface Props {
  width: string;
  height: string;
}
const Tag: React.FC<Props> = ({  }) => {
  return (
    <div className="flex  w-fit flex-col">
      <div className=" h-18 w-24 rounded-tr-2xl rounded-tl-2xl  bg-black shadow-lg ">
        <p className="grid h-full  place-items-center  pb-12 pt-3 text-white">
          hello champ
        </p>
      </div>
      <Tab height={300} width={300}/>
    </div>
  );
};

export default Tag;
