import React, { useEffect } from "react";
import { fetchUserList, removeUser } from "../Redux/Action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserListing = (props) => {
  useEffect(() => {
    props.loadUser();
  }, []);

  const handleDelete = (code) => {
    if (window.confirm("Are you sure you want to delete")) {
      props.removeuser(code);
      props.loadUser();
      toast.success("User Removed Successfully");
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-header ms-5 me-5">
          <h2>User List</h2>
          <Link to={"/user/add"} className="btn btn-success">
            Add User
          </Link>
        </div>
        <div className="card-body">
          {props.user.loading ? (
            <div>
              <h2>Loading...</h2>
            </div>
          ) : props.user.error ? (
            <div>
              <h2>{props.user.error}</h2>
            </div>
          ) : (
            <table className="table table-bordered">
              <thead className="table-primary">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {props.user.userList.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.role}</td>
                    <td>
                      <Link
                        to={"/user/edit/" + user.id}
                        className="btn btn-primary"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger ms-3"
                        onClick={() => {
                          handleDelete(user.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(fetchUserList()),
    removeuser: (code) => dispatch(removeUser(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);

//-----------------------------------------------------------------------

// import React, { useEffect } from "react";
// import { fetchUserList } from "../Redux/Action";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { Button } from "bootstrap";

// const UserListing = (props) => {
//   useEffect(() => {
//     props.loaduser();
//     // console.log(props.user.userList)
//   }, []);

//   return (
//     // props.user.loading?<div><h2>Loading...</h2></div>:
//     // props.user.errMessage?<div><h2>{props.user.errMessage}</h2></div>:
//     <div>
//       <div className="card">
//         <div className="card-header">
//           <h2>User List</h2>
//         </div>
//         <div className="card-body">
//           <table className="table table-bordered">
//             <thead className="table-primary">
//               <tr>
//                 <td>ID</td>
//                 <td>Name</td>
//                 <td>Email ID</td>
//                 <td>Phone</td>
//                 <td>Role</td>
//                 <td>Action</td>
//               </tr>
//             </thead>

//             <tbody>
//               {props.user.userList.map((user) => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.role}</td>
//                   <td>
//                     <Link className="btn btn-primary">Edit</Link>
//                     <button className="btn btn-danger ms-3">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loaduser: () => dispatch(fetchUserList()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserListing);

//---------------------------------------------------------------------------------


// import React, { useEffect, useState } from "react";
// import { fetchUserList, removeUser } from "../Redux/Action";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import Pagination from "./Pagination";

// const UserListing = (props) => {
//   const [currentPage, setCurrentPage] = useState(1);
// const usersPerPage = 10;

//   useEffect(() => {
//     props.loadUser();
//   }, []);

//   // Calculate the indexes of the first and last users on the current page
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;

//   // Get the current users for the current page
//   const currentUsers = props.user.userList.slice(
//     indexOfFirstUser,
//     indexOfLastUser
//   );

//   const handleDelete = (code) => {
//     if (window.confirm("Are you sure you want to delete")) {
//       props.removeuser(code);
//       props.loadUser();
//       toast.success("User Removed Successfully");
//     }
//   };

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <div className="card">
//         <div className="card-header ms-5 me-5">
//           <h2>User List</h2>
//           <Link to={"/user/add"} className="btn btn-success">
//             Add User
//           </Link>
//         </div>
//         <div className="card-body">
//           {props.user.loading ? (
//             <div>
//               <h2>Loading...</h2>
//             </div>
//           ) : props.user.error ? (
//             <div>
//               <h2>{props.user.error}</h2>
//             </div>
//           ) : (
//             <div>
//               <table className="table table-bordered">
//                 <thead className="table-primary">
//                   <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Email ID</th>
//                     <th>Phone</th>
//                     <th>Role</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentUsers.map((user) => (
//                     <tr key={user.id}>
//                       <td>{user.id}</td>
//                       <td>{user.name}</td>
//                       <td>{user.email}</td>
//                       <td>{user.phone}</td>
//                       <td>{user.role}</td>
//                       <td>
//                         <Link
//                           to={"/user/edit/" + user.id}
//                           className="btn btn-primary"
//                         >
//                           Edit
//                         </Link>
//                         <button
//                           className="btn btn-danger ms-3"
//                           onClick={() => {
//                             handleDelete(user.id);
//                           }}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <Pagination
//                 usersPerPage={usersPerPage}
//                 totalUsers={props.user.userList.length}
//                 paginate={paginate}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadUser: () => dispatch(fetchUserList()),
//     removeuser: (code) => dispatch(removeUser(code)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
