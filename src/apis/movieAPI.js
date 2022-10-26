import axiosClient from "./axiosClient"

const movieAPI = {
    getMovies: () =>{
        return axiosClient.get(
            "QuanLyPhim/LayDanhSachPhim",
            {params : {maNhom: "GP03"}}
        )
    },
    getBanners: ()=>{
        return axiosClient.get("QuanLyPhim/LayDanhSachBanner")
    },
    getMovieDetails: (movieId)=>{
        return axiosClient.get("QuanLyPhim/LayThongTinPhim",{
            params: {
                maPhim: movieId
            }
        })
    },
    getCinemaOfMovie: (movieId)=> {
        return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim",{
            params: {
                maPhim: movieId
            }
        })
    },
    getCinema: ()=> {
        return axiosClient.get(
            "QuanLyRap/LayThongTinHeThongRap",
            {params : {maNhom: "GP03"}}
        )
    },
    getGroupCinema: (maRap)=> {
        return axiosClient.get(
            "QuanLyRap/LayThongTinCumRapTheoHeThong",
            {params: {maHeThongRap: maRap }}
        )
    }
}

export default movieAPI