CLI: npx creat-react-app bc27-capstone-react

Libraries:
- API: axios
- Router: react-router-dom
- State management: @reduxjs/toolkit
- npm install react-redux
- Form management: react-hook-form

Structure project:
-src/
    - playground/ : dùng để demo một số chức năng
    - components/ 
        + Dùng để chứa các presentational components, là các component chỉ nhận vào props và dùng local state để hiển thị UI, không chứa các xử lí logic của ứng dụng
        + VD: button, sidebar, header, footer,...
    - modules/
    
        + HomeModule: chứa các components cấu thành trang Home (Banner, Showing, Cinema,...)
        + AuthModule: chứa các components cho tính năng đăng nhập/đăng ký (login, Register,...)

        - modules/module-name/
            = components/: chỉ sử dụng trong module Home, các components này sẽ chứa các component cấu thành một chức năng hoàn chỉnh, các components này sẽ có chứa các xử lý logic của ứng dụng (call API, redux).
            - pages/: chứa các component cấu thành 1 page hoàn chỉnh (được import và sử dụng bởi router).
            - slices/: chứa các redux slices

    - apis/: setup axios và các hàm gọi API

    - interfaces/: Định nghĩa các types cho data của project (API,...)
    - store.ts: set up redux store
    - hooks/: chứa các custom hooks