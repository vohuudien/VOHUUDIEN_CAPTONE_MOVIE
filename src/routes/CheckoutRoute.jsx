import { Navigate } from "react-router-dom"

const CheckoutRoute = ({children}) => {
    //Logic kiểm tra xem user có được truy cập vào route hay không
    const user = JSON.parse(localStorage.getItem("user"))

    //Chưa đăng nhập, điều hướng về trang login
    if(!user){
        return <Navigate to="/login"/>
    }

  return children
}

export default CheckoutRoute