import React, { useState } from "react";
import axios from "axios"
import "../auth/style.css";
import { MainUrl } from "../../api/apiHelper";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: null,
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    console.log("mainurl", MainUrl)
  
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
  
    // Log FormData contents
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  
    try {
      const response = await axios.post(`${MainUrl}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
  
      console.log("response in signup", response);
      if (response.data.success) {
        navigate("/login");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  

  return (
    <>
      <section className="page-title-box">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center text-white">
                <h3 className="mb-4">Signup</h3>
                <div className="page-next">
                  <nav
                    className="d-inline-block"
                    aria-label="breadcrumb text-center"
                  >
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">
                        <a href="javascript:void(0)">Signup</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="shape">
          <svg viewBox="0 0 1440 250">
            <path
              fill=""
              fill-opacity="1"
              d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <section className="sidebar-page-container">
        <div className="container">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 content-side">
              <div className="blog-details-content">
                <div className="page-content">
                  <form onSubmit={submitHandler} name="loginform" id="loginform">
                    <p className="login-username form-group">
                      <label htmlFor="user_login">Full Name</label>
                      <input
                        type="text"
                        value={input.fullname}
                        name="fullname"
                        onChange={changeEventHandler}
                        className="input form-control"
                        placeholder="Name"
                        autoComplete="name"
                      />
                    </p>
                    <p className="login-username form-group">
                      <label htmlFor="user_email">Email</label>
                      <input
                        type="email"
                        value={input.email}
                        name="email"
                        onChange={changeEventHandler}
                        className="input form-control"
                        placeholder="Email"
                        autoComplete="email"
                      />
                    </p>
                    <p className="login-username form-group">
                      <label htmlFor="user_phone">Phone Number</label>
                      <input
                        type="tel"
                        value={input.phoneNumber}
                        name="phoneNumber"
                        onChange={changeEventHandler}
                        className="input form-control"
                        placeholder="+919767856423"
                        autoComplete="tel"
                      />
                    </p>
                    <p className="login-password form-group">
                      <label htmlFor="user_pass">Password</label>
                      <input
                        type="password"
                        value={input.password}
                        name="password"
                        onChange={changeEventHandler}
                        className="input form-control"
                        placeholder="Password"
                        size="20"
                        autoComplete="current-password"
                      />
                    </p>
                    <p className="login-remember">
                      <label>
                        <input
                          name="role"
                          type="checkbox"
                          value="student"
                          checked={input.role === "student"}
                          onChange={changeEventHandler}
                        />{" "}
                        Students
                      </label>
                      <label>
                        <input
                          name="role"
                          type="checkbox"
                          value="recruiter"
                          checked={input.role === "recruiter"}
                          onChange={changeEventHandler}
                        />{" "}
                        Recruiter
                      </label>
                    </p>
                    <p className="form-group">
                      <label htmlFor="user_profile">Profile</label>
                      <input
                        type="file"
                        onChange={changeFileHandler}
                        className="form-control"
                        id="inputGroupFile01"
                      />
                    </p>
                    <p className="login-submit">
                      <input
                        type="submit"
                        name="wp-submit"
                        className="button button-primary theme-btn-one"
                        value="Signup"
                      />
                      {/* <input type="hidden" name="redirect_to" value=""/> */}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
