import React, { useContext } from "react";
import SellProduct from "./SellProduct";
import Header from "./Header";
import ProductCard from "./ProductCard";
import { Oval } from "react-loader-spinner";

import { AiOutlineArrowRight } from "react-icons/ai";
import UserDetails from "./UserDetails";
import { useState } from 'react';
export default function ProviderInterFace() {


  const [data,setData] = useState([
    {
      "id":"1",
      "name":"orangejuice",
      "type":"deriverd",
      "productTypeIngredientNames":"orange,sugar",
      "issuerOrgld":"N/A",
      "state":"Unblock",
      "currentBlockerOrgld":"N/A"
    },
    {
      "id":"2",
      "name":"orange",
      "type":"primary",
      "productTypeIngredientNames":"",
      "issuerOrgld":"N/A",
      "state":"Unblock",
      "currentBlockerOrgld":"N/A"
    },
    {
      "id":"3",
      "name":"sugar",
      "type":"primary",
      "productTypeIngredientNames":"",
      "issuerOrgld":"N/A",
      "state":"Unblock",
      "currentBlockerOrgld":"N/A"
    }
  ]);
  console.log('Provider');
  return (
    <div className="h-full">
      <Header />
      <div>
        
          <div className="container-lg mx-auto ">
            {

              <div className="container mx-auto py-8 flex items-start">
                <div className="flex flex-col items-start">
                  <SellProduct />
                  <UserDetails />
                </div>

                <div className="w-full flex flex-col items-start">
                  <h1 className="flex uppercase mb-8 text-2xl ml-6 font-bold">
                    My Listing <AiOutlineArrowRight className="mt-1 ml-4" />
                  </h1>
                  <div className="card-box ml-5">
                    {data.map((product) => {
                     let {
                      id,
                      name,
                      type,
                      productTypeIngredientNames,
                      issuerOrgld,
                      state,
                      currentBlockerOrgld
                      
                    } = product;

                    let Id = id.toString();
                    let Name = name.toString();
                    let Type = type.toString();
                    let ProductType = productTypeIngredientNames.toString();
                    let IssuerOrgld = issuerOrgld.toString();
                    let State = state.toString();
                    let CurrentBlockerOrgld = currentBlockerOrgld.toString();
                      

                       
                        return (
                          <div key={Id} className="mb-8">
                            <ProductCard
                              id = {Id}
                              name = {Name}
                              type = {Type}
                              productTypeIngredientNames = {ProductType}
  
                              issuerOrgld = {IssuerOrgld}
                              state = {State}
                              currentBlockerOrgld = {CurrentBlockerOrgld}
                            />
                          </div>
                        );
                      
                    })}
                  </div>
                </div>
              </div>
            }
          </div>
        
      </div>
    </div>
  );
}