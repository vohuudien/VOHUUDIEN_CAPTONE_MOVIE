import { Avatar } from "@mui/material";
const Header = () => {
  return (
    <>
      <header className="text-gray-600 bg-light fixed-top body-font py-2 ">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 md:mb-0 text-decoration-none">
            <Avatar
              alt="Remy Sharp"
              src="https://thumbs.dreamstime.com/b/ben-letter-logo-design-black-background-ben-creative-initials-letter-logo-concept-ben-letter-design-ben-letter-logo-design-244471871.jpg"
            />
            <span className="ml-3 text-xl">Booking</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="ms-5 text-gray-900 text-decoration-none">
              Lịch Chiếu
            </a>
            <a className="ms-5 text-gray-900 text-decoration-none">Cụm Rạp</a>
            <a className="ms-5 text-gray-900 text-decoration-none">Tin Tức</a>
            <a className="ms-5 text-gray-900 text-decoration-none">Ứng Dụng</a>
          </nav>
          <div>
          <div className="d-flex">
          <div className="d-flex align-items-center">
              <Avatar src="/broken-image.jpg"   sx={{ width: 26, height: 26 }}/>
              <button className="inline-flex items-center border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
                Đăng Nhập
              </button>
            </div>
            <div className="d-flex">
            <button className="inline-flex items-center bg-red-500 py-2 border-0 px-3 ms-2 focus:outline-none hover:bg-gray-200 rounded text-white md:mt-0">
              Đăng Ký
            </button>
            </div>
          </div>
            

            
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
