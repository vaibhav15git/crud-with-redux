import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="mt-5 text-info">Welcome to User CRUD</h1>
        <div className="mt-5 gx-2">
          <Link to={"/user/add"} className="btn btn-warning">
            Go to Add User
          </Link>
          <Link to={"/user"} className="btn btn-info ms-2">
            Go to User List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
