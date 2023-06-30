import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import UserListing from "./Components/UserListing";
import AddUser from "./Components/AddUser";
import UpdateUser from "./Components/UpdateUser";
import { ToastContainer, toast } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <div className="header top-navbar">
            <Link to={"/"} className="ms-5">
              Home
            </Link>
            <Link to={"/user"} className="ms-2">
              User
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/user" element={<UserListing></UserListing>}></Route>
            <Route path="/user/add" element={<AddUser></AddUser>}></Route>
            <Route
              path="/user/edit/:code"
              element={<UpdateUser></UpdateUser>}
            ></Route>
          </Routes>
        </BrowserRouter>

        <ToastContainer className='toast-position' position="bottom-right"></ToastContainer>
      </div>
    </Provider>
  );
}

export default App;
