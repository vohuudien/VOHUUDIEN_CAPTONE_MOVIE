
const Header = () => {
 return (
<>
<header className="text-gray-600 bg-white fixed-top body-font py-3 ">
  <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 md:mb-0 text-decoration-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-nowrap items-center text-base justify-center">
      <a className="ms-5 text-gray-900 text-decoration-none">First Link</a>
      <a className="ms-5 text-gray-900 text-decoration-none">Second Link</a>
      <a className="ms-5 text-gray-900 text-decoration-none">Third Link</a>
      <a className="ms-5 text-gray-900 text-decoration-none">Fourth Link</a>
    </nav>
    <div>
    <button className="inline-flex items-center border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">Đăng Nhập
    </button>
    <button className="inline-flex items-center bg-red-500 py-2 border-0 px-3 ms-2 focus:outline-none hover:bg-gray-200 rounded text-white md:mt-0">Đăng Ký
    </button>
    </div>
   
  </div>
</header>

</>
 )

 

}

export default Header