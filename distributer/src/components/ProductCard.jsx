import React, { useState, useContext, useEffect } from "react";
import Modal from "react-modal";
import { MdClose, MdContentCopy } from "react-icons/md";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    padding: "0 0 0 0",
    zIndex: "100",
  },
};

export default function ProductCard({
  id,
  name,
  type,
  productTypeIngredientNames,
  issuerOrgld,
  state,
  currentBlockerOrgld,

}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [sellerAddress, setSellerAddress] = useState();
  // useEffect(() => {
  //   if (currentAccount === Seller.toLowerCase()) {
  //     setSellerAddress("You");
  //   } else {
  //     let seller = Seller.slice(0, 5) + "..." + Seller.slice(38, 42);
  //     setSellerAddress(seller);
  //   }
  // }, [currentAccount]);
  
  const handleCancel = () => {
    // cancelProduct(tokenID);
    setModalIsOpen(!modalIsOpen);
    
  };
  const handleBlock = () => {
    setModalIsOpen(!modalIsOpen);
    state = "Block";
    console.log(state);
  };
  const handleUnBlock = () => {
    setModalIsOpen(!modalIsOpen);
    state = "Unblock";
    console.log(state);
  };

  const handleUpdate = (data) => {
    // updateProduct(tokenID, newPrice);

    if (date && data) {

      const _date = new Date(date)

      // updateInfo(tokenID, data, Math.round(_date.getTime() / 1000))
      setModalIsOpen(!modalIsOpen);
    }
  };

  const handleBuying = () => {
    // buyProduct(tokenID);
    setModalIsOpen(!modalIsOpen);
  };

  const handlePurchase = () => {
    // purchaseProduct(tokenID);
    setModalIsOpen(!modalIsOpen);
  };

  const [info, setInfo] = React.useState('')
  const [date, setDate] = React.useState('')

  return (
    <>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <div className="flex flex-col items-center w-full px-12 bg-white border-2 border-gray-200 rounded shadow-md py-14 text-blac ">
          <div className="flex flex-col items-start w-full mb-2">
            <MdClose
              onClick={() => setModalIsOpen(!modalIsOpen)}
              className="absolute cursor-pointer top-4 right-6"
              size={35}
            />

            <h1 className="mb-8 text-3xl font-bold text-center uppercase ">
              product details
            </h1>

            <div className="block mb-6 font-medium text-gray-900 text-md">
              Product Name : {name}
            </div>
            <div className="block mb-6 font-medium text-gray-900 text-md">
              Product Id : {id}
            </div>
            <div className="block mb-6 font-medium text-gray-900 text-md">
              Product Type : {type}
            </div>
            <div className="block mb-6 font-medium text-gray-900 text-md">
              Product Ingredient Names : {productTypeIngredientNames}
            </div>
            <div className="block mb-6 font-medium text-gray-900 text-md">
              Issuer Orgld : {issuerOrgld}
            </div>
            <div className="block mb-6 font-medium text-gray-900 text-md">
              State : {state}
            </div>
             <div className="block mb-6 font-medium text-gray-900 text-md">
              Current Orgld : {currentBlockerOrgld}
            </div>
            <>
            </>
            <div className="flex items-start justify-center mb-6 font-medium text-gray-900 text-md">
              Owned By :{" "}
              
                "You"
              
            </div>
            { state === "Unblock" ? (
            <button
                  className="flex items-center justify-center px-8 py-2 font-semibold text-white uppercase bg-red-500 rounded-full cursor-pointer hover:bg-red-900 focus:outline-none focus:shadow-outline"
                  onClick={handleBlock}
                  
                  
                >
                  Block
            </button>
            
            ) : (
              <button
              className="flex items-center justify-center px-8 py-2 font-semibold text-white uppercase bg-green-500 rounded-full cursor-pointer hover:bg-red-900 focus:outline-none focus:shadow-outline"
                  onClick={handleUnBlock}
                >
                  Unblock
                </button>
            )
            }   
            <div>
              <div className="flex items-start justify-center mb-6 font-medium text-gray-900 text-md">

              </div>
            </div>
          </div>
          
            <div className="w-full ">
              <div className="w-full mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Update Infor
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:border-gray-700"
                  type="text"
                  placeholder="Enter information"
                  onChange={(e) => setInfo(e.target.value)}
                />
                <input
                  className="w-full px-3 py-2 leading-tight my-2.5 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:border-gray-700"
                  type="datetime-local"
                  placeholder="Enter time"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between w-2/6 md:w-full">
                <button
                  className="flex items-center justify-center px-8 py-2 font-semibold text-white uppercase bg-red-500 rounded-full cursor-pointer hover:bg-red-900 focus:outline-none focus:shadow-outline"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="flex items-center justify-center px-8 py-2 font-semibold text-white uppercase bg-blue-600 rounded-full cursor-pointer hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                  onClick={() => {
                    handleUpdate(info)
                  }}
                >
                  update
                </button>
              </div>
            </div>
           
        </div>
      </Modal >
      <div className="z-10 px-6 py-8 bg-white rounded-lg shadow-lg">
       
        <div
          className="px-1 mb-4 cursor-pointer"
          onClick={() => setModalIsOpen(!modalIsOpen)}
        >
          {" "}
         <div className="block mb-6 font-medium text-gray-900 text-md">
              Product Name : {name}
            </div>
            <div className="block mb-6 font-medium text-gray-900 text-md">
              Product Id : {id}
            </div>
            <div className="block mb-6 font-medium text-gray-900 text-md">
              Product Type : {type}
            </div>
            <div className="block mb-6 font-medium text-gray-900 text-md">
              Product Ingredient Names : {productTypeIngredientNames}
            </div>
            <div className="block mb-6 font-medium text-gray-900 text-md">
              Issuer Orgld : {issuerOrgld}
            </div>
            <div className="block mb-6 font-medium text-gray-900 text-md">
              State : {state}
            </div>
             <div className="block mb-6 font-medium text-gray-900 text-md">
              Current Orgld : {currentBlockerOrgld}
            </div>
          <div className="flex items-start mb-6 font-medium text-gray-900 text-md">

          </div>
        </div>
      </div>
    </>
  );
}