import React, { useContext } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import { Oval } from "react-loader-spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AiOutlineArrowRight } from "react-icons/ai";
import UserDetails from "./UserDetails";

export default function DistributerInterFace() {
  


  const data = [
      {
        "id":"1",
        "name":"Orange-Juice",
        "type":"Deriverd",
        "productTypeIngredientNames":"Orange,Sugar",
        "issuerOrgld":"N/A",
        "state":"Block",
        "currentBlockerOrgld":"N/A"
      },
      {
        "id":"2",
        "name":"Orange",
        "type":"Primary",
        "productTypeIngredientNames":"",
        "issuerOrgld":"N/A",
        "state":"Unblock",
        "currentBlockerOrgld":"N/A"
      },
      {
        "id":"3",
        "name":"Sugar",
        "type":"Primary",
        "productTypeIngredientNames":"",
        "issuerOrgld":"N/A",
        "state":"Unblock",
        "currentBlockerOrgld":"N/A"
      }
    ];
  const datamar = [
    {
      "id":"4",
      "name":"Apple-Juice",
      "type":"Deriverd",
      "productTypeIngredientNames":"Apple,Sugar",
      "issuerOrgld":"N/A",
      "state":"Unblock",
      "currentBlockerOrgld":"N/A"
    },
    {
      "id":"5",
      "name":"Apple",
      "type":"Primary",
      "productTypeIngredientNames":"",
      "issuerOrgld":"N/A",
      "state":"Unblock",
      "currentBlockerOrgld":"N/A"
    },
    {
      "id":"6",
      "name":"Sugar",
      "type":"Primary",
      "productTypeIngredientNames":"",
      "issuerOrgld":"N/A",
      "state":"Unblock",
      "currentBlockerOrgld":"N/A"
    }
  ];
  
console.log('Distributer');
  return (
    <div className="h-full">
      <Header />
      <div className="mx-auto container-lg">
        
          <div>
            {
              <div className="container flex items-start py-8 mx-auto ">
                <UserDetails />
                <div className="z-0 flex flex-col items-start w-full ml-5 overflow-hidden">
                  {" "}
                  <h1 className="flex mb-8 ml-5 text-2xl font-bold uppercase">
                    My Inventory <AiOutlineArrowRight className="mt-1 ml-4" />
                  </h1>
                  <Swiper
                    autoplay={false}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView="auto"
                    breakpoints={{
                      320: {
                        slidesPerView: 1.25,
                        spaceBetween: 30,
                      },

                      1024: {
                        slidesPerView: 2.25,
                        spaceBetween: 20,
                      },
                      1280: {
                        slidesPerView: 3.25,
                        spaceBetween: 20,
                      },
                    }}
                    className="z-0 w-full ml-8"
                  >
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
                        <SwiperSlide key={Id} className="mb-8">
                          <ProductCard
                            id = {Id}
                            name = {Name}
                            type = {Type}
                            productTypeIngredientNames = {ProductType}

                            issuerOrgld = {IssuerOrgld}
                            state = {State}
                            currentBlockerOrgld = {CurrentBlockerOrgld}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                  <div className="flex flex-col items-start w-full">
                    <h1 className="flex mb-8 ml-5 text-2xl font-bold uppercase">
                      MarketPlace <AiOutlineArrowRight className="mt-1 ml-4" />
                    </h1>
                    <div className="card-box">
                      {datamar?.map((product) => {
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
              </div>
            }
          </div>
         
      </div>
    </div>
  );
}