import React from "react";
import { useSelector, useDispatch } from "react-redux";
import useRequest from "hooks/useRequest";

import Carousel from 'react-bootstrap/Carousel';
import movieAPI from "apis/movieAPI.js";

const Banner = () => {
  const { data: banners, isLoading, error } = useRequest(movieAPI.getBanners); 
  return (
    <div className="bg-all mt-5 ">
      <Carousel>
        {banners?.map((banner) => {
        return (
          <Carousel.Item key={banner.maBanner}>
            <img
            
            className="container d-block p-5"
              style={{maxWidth:"900px", maxHeight:"450px",minHeight:"300px"}}
              
              src={banner.hinhAnh}
              alt={`banner-${banner.maBanner}`}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
      </div>
  
  );
};

export default Banner;
