import React from 'react'
import '../auth/style.css'

const Login = () => {
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
      <div class='position-relative'>
        <div class='shape'>
          <svg viewBox='0 0 1440 250'>
            <path
              fill=''
              fill-opacity='1'
              d='M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
            ></path>
          </svg>
        </div>
      </div>
      <section className='sidebar-page-container  '>
        <div className='container'>
          <div className='row clearfix'>
            <div className='col-lg-12 col-md-12 col-sm-12 content-side'>
              <div className='blog-details-content'>
                <div className='page-content'>
                  <form
                    name='loginform'
                    id='loginform'
                    action='https://listit.smartdemowp.com/wp-login.php'
                    method='post'
                  >
                    <p className='login-username form-group'>
                      <label for='user_login'>Username or Email</label>
                      <input
                        type='text'
                        name='log'
                        id='user_login'
                        className='input form-control'
                        placeholder='Username or Email'
                        value=''
                        size='20'
                      />
                    </p>
                    <p className='login-password form-group'>
                      <label for='user_pass'>Password</label>
                      <input
                        type='password'
                        name='pwd'
                        id='user_pass'
                        className='input form-control'
                        placeholder='Password'
                        value=''
                        size='20'
                      />
                    </p>
                    <p className='login-remember'>
                      <label>
                        <input
                          name='rememberme'
                          type='checkbox'
                          id='rememberme'
                        />{' '}
                        Students
                      </label>
                      <label>
                        <input name='rememberme' type='checkbox' id='' />{' '}
                        Recruiter
                      </label>
                    </p>
                    <p>
                      Don't have an account! <a href='#'>Signup</a>
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
  )
}

export default Login
