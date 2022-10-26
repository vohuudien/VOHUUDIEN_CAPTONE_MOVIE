import React, { useEffect, useState } from "react";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { Avatar } from "@mui/joy";
const Cinema = () => {
  const { data: cinemas, isLoading, error } = useRequest(movieAPI.getCinema);
  const [maRap, setMaRap] = useState("BHDStar");
 
  const { data: groupCinemas } = useRequest(() =>
    movieAPI.getGroupCinema(maRap)
  );
  


  return (
    <div style={{ maxWidth: 1000, borderStyle: 'solid' }} className=" my-5 container bg-white">
      
        <div class="row">
          <div class="col-5">
            {cinemas?.map((cinema) => {
              return (
                <div className="row mb-1">
                  <button
                    style={{ maxWidth: 80, maxHeight: 80 }}
                    className="col-4 d-flex align-items-center justify-content-center border-secondary border-end p-2"

                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={cinema.logo}
                      className="p-0"
                    />
                  </button>
                  <button className="col btn ps-4" style={{ maxHeight: 80 }}>
                    <div className="row h-25">
                      <h6 className="fw-semibold text-start text-uppercase">
                        {cinema.tenHeThongRap}
                      </h6>
                    </div>
                    <div className="row h-50 py-2">
                      <p className=" text-start text-danger">[Chi tiết]</p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
          <div class="col border-secondary border-start">
            {groupCinemas?.map((detailCinema) => {
              return (
                <div className="row mb-1">
                  <button
                    style={{ maxWidth: 80, maxHeight: 80 }}
                    className="col-4 d-flex align-items-center justify-content-center p-2"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="https://statics.vincom.com.vn/http/vincom-ho/thuong_hieu/anh_logo/BHD-Cineplex.png/b06e9b3857daa6504420e00099664cc4.webp"
                      className="p-0 h-75 w-75"
                    />
                  </button>
                  <button className="col btn ps-4" style={{ maxHeight: 80 }}>
                    <div className="row h-25">
                      <h6 className="fw-semibold text-start text-uppercase">
                        {detailCinema.tenCumRap}
                      </h6>
                    </div>
                    <div className="row h-25 my-2">
                      <p className="fw-lighter text-start ">
                        {detailCinema.diaChi}
                      </p>
                    </div>
                    <div className="row h-50">
                      <p className=" text-start text-danger">[Lịch chiếu]</p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

  );
};

export default Cinema;
