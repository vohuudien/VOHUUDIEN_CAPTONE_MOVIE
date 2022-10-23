import axios from "axios";
//Set up các cấu hình axios

const axiosClient = axios.create(
    {
        baseURL: "https://movienew.cybersoft.edu.vn/api/",
        headers: {
            TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMiIsIkhldEhhblN0cmluZyI6IjE1LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTUxNjgwMDAwMCIsIm5iZiI6MTY1MzkzMDAwMCwiZXhwIjoxNjgxNjY0NDAwfQ.oR9K8iSTqbo-t0Q_a-WFnKePPaMAr7sdlgR5xKAtQWA"
        }
    }
)

// interceptors
axiosClient.interceptors.response.use(
    //ta có thể thay đổi response trước khi response được trả ra cho nơi gọi request
    (response)=>{ return response.data.content},
    (error) => {
        Promise.reject(error?.response?.data.content)
    }
)


export default axiosClient