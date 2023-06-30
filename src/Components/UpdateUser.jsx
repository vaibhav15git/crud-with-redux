import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchUserObj, updateUserFunction } from "../Redux/Action";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UpdateUser = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();

  const userobj = useSelector((state)=>state.user.userObject)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset previous errors
    setErrors({});
    // Perform validation
    const validationErrors = {};

    if (name.trim() === "") {
      validationErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    }

    if (phone.trim() === "") {
      validationErrors.phone = "Phone is required";
    }

    if (role.trim() === "") {
      validationErrors.role = "Role is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const userObject = { id, name, email, phone, role };
      console.log(userObject);
      dispatch(updateUserFunction(userObject,id));
      toast.success("User Updated Successfully");
      navigate("/user");
      setName("");
      setEmail("");
      setPhone("");
      setRole("");
    }
  };

  useEffect(() => {
    dispatch(fetchUserObj(code));
  }, []);

   useEffect(() => {
    if(userobj){
      setId(userobj.id);
      setName(userobj.name);
      setEmail(userobj.email);
      setPhone(userobj.phone)
      setRole(userobj.role);
    }
   }, [userobj]);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="card ms-5 container-fluid w-50">
            <div className="card-header">
              <h2>Update User</h2>
            </div>
            <div className="card-body text">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="enter your name"
                      value={id || ''}
                     disabled="disabled"
                    />
                    <label htmlFor="floatingInput">ID</label>
                  
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="enter your name"
                      value={name || ''}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Name</label>
                    {errors.name && (
                      <p className="text-danger">{errors.name}</p>
                    )}
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com "
                      value={email ||''}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                    {errors.email && (
                      <p className="text-danger">{errors.email}</p>
                    )}
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingNumber"
                      placeholder="Phone Number"
                      value={phone || ''}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Phone Number</label>
                    {errors.phone && (
                      <p className="text-danger">{errors.phone}</p>
                    )}
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingText"
                      placeholder="Role"
                      value={role || ''}
                      onChange={(e) => setRole(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Role</label>
                    {errors.role && (
                      <p className="text-danger">{errors.role}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer" style={{ textAlign: "left" }}>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
              <Link className="btn btn-warning ms-2" to={"/user"}>
                Back
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
