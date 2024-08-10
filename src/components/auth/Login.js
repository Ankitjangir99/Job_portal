import React, { useState } from 'react'
import '../auth/style.css'
import axios from "axios"
import "../auth/style.css";
import { MainUrl } from "../../api/apiHelper";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const response = await axios.post(`${MainUrl}/login`, input, {
        headers: {
          "Content-Type" : "application/json"
        },
        withCredentials : true,
      })

      console.log("response in sinup", response)
      if(response.data.success){
        navigate("/");
      }
    } catch (err) {
      console.log("errr", err)
    }
  };

  return (
    <>
      <section className='page-title-box'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='text-center text-white'>
                <h3 className='mb-4'>Login</h3>
                <div className='page-next'>
                  <nav
                    className='d-inline-block'
                    aria-label='breadcrumb text-center'
                  >
                    <ol className='breadcrumb justify-content-center'>
                      <li className='breadcrumb-item'>
                        <a href='#'>Home</a>
                      </li>

                      <li
                        className='breadcrumb-item active'
                        aria-current='page'
                      >
                        {' '}
                        Login{' '}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='position-relative'>
        <div className='shape'>
          <svg viewBox='0 0 1440 250'>
            <path
              fill=''
              fill-opacity='1'
              d='M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
            ></path>
          </svg>
        </div>
      </div>
      <section className='sidebar-page-container'>
        <div className='container'>
          <div className='row clearfix'>
            <div className='col-lg-12 col-md-12 col-sm-12 content-side'>
              <div className='blog-details-content'>
                <div className='page-content'>
                  <form
                    onSubmit={submitHandler}
                    name='loginform'
                    id='loginform'
                  >
                    <p className='login-username form-group'>
                      <label htmlFor='user_login'>Username or Email</label>
                      <input
                        type='email'
                        value={input.email}
                        name='email'
                        onChange={changeEventHandler}
                        id='user_login'
                        className='input form-control'
                        placeholder='Username or Email'
                        size='30'
                        autoComplete='email'
                      />
                    </p>
                    <p className='login-password form-group'>
                      <label htmlFor='user_pass'>Password</label>
                      <input
                        type='password'
                        value={input.password}
                        name='password'
                        onChange={changeEventHandler}
                        id='user_pass'
                        className='input form-control'
                        placeholder='Password'
                        size='30'
                        autoComplete='current-password'
                      />
                    </p>
                    <p className='login-remember'>
                      <label>
                        <input
                          name='role'
                          type='checkbox'
                          value='student'
                          checked={input.role === 'student'}
                          onChange={changeEventHandler}
                          id='rememberme'
                        />{' '}
                        Students
                      </label>
                      <label>
                        <input
                          name='role'
                          type='checkbox'
                          value='recruiter'
                          checked={input.role === 'recruiter'}
                          onChange={changeEventHandler}
                          id='rememberme'
                        />{' '}
                        Recruiter
                      </label>
                    </p>
                    <p>
                      Don't have an account? <a href='#'>Signup</a>
                    </p>
                    <p className='login-submit'>
                      <input
                        type='submit'
                        name='wp-submit'
                        id='wp-submit'
                        className='button button-primary theme-btn-one'
                        value='Login'
                      />
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

export default Login;
