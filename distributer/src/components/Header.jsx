import React, { useContext, useState } from "react";
import TrackBtn from "./TrackBtn";

export default function Header() {
  
  return (
    <div className=" bg-white shadow p-4">
      <div className="flex flex-row items-center justify-between container mx-auto">
        <div id="logo" className="text-2xl text-blue-500 font-bold">
          Supply-Chain
        </div>
        <div>
        <TrackBtn />
        </div>
      </div>
    </div>
  );
}
