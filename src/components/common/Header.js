import React from 'react'
import '../common/style.css'

const Header = () => {
  return (
    <>
      <header className='main-header header-style-1'>
        <div className='header-lower'>
          <div className='container'>
            <div className='outer-box'>
              <div className='logo-box'>
                <div className='logo'>
                  <a href='#'>
                    <img
                      src='https://listit.smartdemowp.com/wp-content/themes/listit/assets/images/logo-black.svg'
                      alt='Logo'
                    />
                  </a>
                </div>
              </div>
              <div className='menu-area'>
                <div className='mobile-nav-toggler'>
                  <i className='las la-bars'></i>
                </div>
                <nav className='main-menu navbar-expand-md navbar-light'>
                  <div
                    className='collapse navbar-collapse show clearfix'
                    id='navbarSupportedContent'
                  >
                    <ul
                      id='menu-primary-menu'
                      className='navbar-nav mx-auto navbar-center'
                    >
                      <li id='#' className='nav-item'>
                        <a
                          href='/'
                          aria-haspopup='true'
                          aria-expanded='false'
                          className='nav-link'
                        >
                          Home
                        </a>
                      </li>

                      <li id='#' className='nav-item'>
                        <a href='#' aria-haspopup='true' className='nav-link'>
                          Jobs
                        </a>
                      </li>
                      <li id='#' className='nav-item'>
                        <a
                          href='/brouse'
                          aria-haspopup='true'
                          className='nav-link'
                        >
                          Browse
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className='btn-box'>
                <a href='/login' className='theme-btn-two'>
                  <i className='las la-user'></i>Login
                </a>

                <a href='/signup' className='theme-btn-one'>
                  Signup
                </a>
                <div className='list-inline-item dropdown'>
                  <a
                    href='javascript:void(0)'
                    className='header-item '
                    id='userdropdown'
                    data-bs-toggle='dropdown'
                    aria-expanded='true'
                  >
                    <img
                      src='assets/images/profile.jpg'
                      alt=''
                      width='35'
                      height='35'
                      className='rounded-circle me-1'
                    />{' '}
                    <span className='d-none d-md-inline-block fw-medium text-dark'>
                      Hi, Jansh
                    </span>
                  </a>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='userdropdown'
                    data-bs-popper='static'
                  >
                    <li>
                      <a className='dropdown-item' href='manage-jobs.html'>
                        Manage Jobs
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='bookmark-jobs.html'>
                        Bookmarks Jobs
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='profile.html'>
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='sign-out.html'>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
