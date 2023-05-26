import React, { useState, useContext } from "react";

import { toast } from "react-hot-toast";
import { GrLocation, GrUserWorker } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { MdOutlineMailOutline } from "react-icons/md";

export default function UserDetails() {
  const userData ={
    name : "",
    location : "",
    profession : "",
    emailAddress : "",
    contactNo : "",
  }
  return (
    <div>
      <div className="bg-white px-12 py-16 rounded shadow-lg text-black my-8 w-96">
        <h1 className="uppercase mb-8 text-2xl text-center font-bold">
          user detailes
        </h1>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Wallet Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter Address Here..."
            
          />
        </div>

        <div
          className="bg-blue-600 hover:bg-blue-900 rounded-full text-white  py-3 px-9 focus:outline-none focus:shadow-outline uppercase flex items-center justify-center cursor-pointer font-semibold"
          
        >
          Get Details
        </div>
        <div>
          {userData.name !== "" ? (
            <div className="py-4 -mb-8">
              <div className="flex flex-col items-start mb-4 text-md font-medium text-gray-900 ml-1">
                <div className="flex items-start">
                  {" "}
                  <BsPerson className="mr-1 mt-1" />
                  Name :
                </div>

                <div className="ml-2 mt-2 py-1 px-8 bg-gray-200 rounded-full text-gray-500 flex items-center w-full">
                  {userData.name.toUpperCase()}
                </div>
              </div>
              <div className="flex flex-col items-start mb-4 text-md font-medium text-gray-900">
                <div className="flex items-start">
                  <GrLocation className="mr-1 mt-1" /> Location :
                </div>
                <div className="ml-2 mt-2 py-1 px-8 bg-gray-200 rounded-full text-gray-500 flex items-center w-full">
                  {" "}
                  {userData.location.toUpperCase()}
                </div>
              </div>
              <div className="flex flex-col items-start mb-4 text-md font-medium text-gray-900">
                <div className="flex items-start">
                  <GrUserWorker className="mr-1 mt-1" /> Profession :
                </div>
                <div className="ml-2 mt-2 py-1 px-8 bg-gray-200 rounded-full text-gray-500 flex items-center w-full">
                  {" "}
                  {userData.profession.toUpperCase()}
                </div>
              </div>
              <div className="flex flex-col items-start mb-4 text-md font-medium text-gray-900">
                <div className="flex items-start">
                  <MdOutlineMailOutline className="mr-1 mt-1" /> Email Address :
                </div>
                <div className="ml-2 mt-2 py-1 px-8 bg-gray-200 rounded-full text-gray-500 flex items-center w-full">
                  {" "}
                  {userData.emailAddress}
                </div>
              </div>
              <div className="flex flex-col items-start mb-4 text-md font-medium text-gray-900">
                <div className="flex items-start">
                  <TiContacts className="mr-1 mt-1" /> Contact No. :
                </div>
                <div className="ml-2 mt-2 py-1 px-8 bg-gray-200 rounded-full text-gray-500 flex items-center w-full">
                  {" "}
                  {userData.contactNo}
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
