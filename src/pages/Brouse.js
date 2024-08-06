import React from 'react'
import '../components/auth/style.css'
import 'react-icons'
import { LuLayoutGrid } from 'react-icons/lu'
import { FaList } from 'react-icons/fa6'
import { FaRegHeart } from 'react-icons/fa'

const Brouse = () => {
  return (
    <>
      <section className='page-title-box'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='text-center text-white'>
                <h3 className='mb-4'>Browse</h3>
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
                        Browse{' '}
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
      <div className='browse_sec'>
        <div className='container'>
          <div class='row'>
            <div class='col-lg-12'>
              <div class='list-flex'>
                <div class='item-flex'>
                  <div class='list-inline-item'>
                    <a href='#' class='sorter  active'>
                      <i>
                        <LuLayoutGrid />
                      </i>
                      <span>Grid</span>
                    </a>
                  </div>
                  <div class='list-inline-item'>
                    <a href='#' class='sorter  '>
                      <i>
                        <FaList />
                      </i>{' '}
                      <span>List</span>
                    </a>
                  </div>
                </div>
                <div class='item-flex arch-post-count'>
                  <span>Showing 4 of 16 Results</span>
                </div>
                <div class='item-flex'>
                  <span class='shortby'>Sort by</span>
                  <div class='dropdown'>
                    <a
                      href='javascript:void(0)'
                      className='header-item dropdown-toggle '
                      id='userdropdown'
                      data-bs-toggle='dropdown'
                      aria-expanded='true'
                    >
                      <span class='selection'>Latest</span>
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
                  <span id='sidebar-filter'>
                    <i class='las la-filter'></i>Filter
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 mt-4'>
              <div className='card job-grid-box'>
                <div className='card-body p-4'>
                  <div className='favorite-icon'>
                    <a href='javascript:void(0)'>
                      <i className='ui-heart'>
                        <FaRegHeart />
                      </i>
                    </a>
                  </div>
                  <div>
                    <a href='company-details.html'>
                      <img
                        src='assets/images/img-01.png'
                        alt=''
                        className='img-fluid rounded-3'
                      />
                    </a>
                  </div>
                  <div className='mt-4'>
                    <a href='#' className='primary-link'>
                      <h5 className='fs-17 mb-1'>Magento Developer</h5>
                    </a>
                    <p className='text-muted'>Jobcy Technology Pvt.Ltd</p>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <span className='badge bg-success-subtle text-success  fs-13 mt-1'>
                          $500/ Month
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-primary-subtle text-primary  fs-13 mt-1'>
                          Min. 1 Year
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-info-subtle text-info  fs-13 mt-1'>
                          Developer
                        </span>
                      </li>
                    </ul>
                    <div className='job_btn'>
                      <a href='#' className='theme-btn-two'>
                        Detail
                      </a>
                      <a href='#' className='theme-btn-one'>
                        Save For Later
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mt-4'>
              <div className='card job-grid-box active'>
                <div className='card-body p-4'>
                  <div className='favorite-icon'>
                    <a href='javascript:void(0)'>
                      <i className='uil-heart'>
                        <FaRegHeart />
                      </i>
                    </a>
                  </div>
                  <div>
                    <a href='#'>
                      <img
                        src='assets/images/img-02.png'
                        alt=''
                        className='img-fluid rounded-3'
                      />
                    </a>
                  </div>
                  <div className='mt-4'>
                    <a href='#' className='primary-link'>
                      <h5 className='fs-17 mb-1'>Marketing Director</h5>
                    </a>
                    <p className='text-muted'>Jobcy Technology Pvt.Ltd</p>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <span className='badge bg-success-subtle text-success  fs-13 mt-1'>
                          $850/ Month
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-primary-subtle text-primary  fs-13 mt-1'>
                          Min. 3 Year
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-info-subtle text-info  fs-13 mt-1'>
                          Director
                        </span>
                      </li>
                    </ul>
                    <div className='job_btn'>
                      <a href='#' className='theme-btn-two'>
                        Detail
                      </a>
                      <a href='#' className='theme-btn-one'>
                        Save For Later
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mt-4'>
              <div className='card job-grid-box'>
                <div className='card-body p-4'>
                  <div className='favorite-icon'>
                    <a href='javascript:void(0)'>
                      <i className='uil-heart'>
                        <FaRegHeart />
                      </i>
                    </a>
                  </div>
                  <div>
                    <a href='#'>
                      <img
                        src='assets/images/img-03.png'
                        alt=''
                        className='img-fluid rounded-3'
                      />
                    </a>
                  </div>
                  <div className='mt-4'>
                    <a href='#' className='primary-link'>
                      <h5 className='fs-17 mb-1'>Magento Developer</h5>
                    </a>
                    <p className='text-muted'>Jobcy Technology Pvt.Ltd</p>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <span className='badge bg-success-subtle text-success  fs-13 mt-1'>
                          $780/ Month
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-primary-subtle text-primary  fs-13 mt-1'>
                          0 - 1 Year
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-info-subtle text-info  fs-13 mt-1'>
                          Developer
                        </span>
                      </li>
                    </ul>
                    <div className='job_btn'>
                      <a href='#' className='theme-btn-two'>
                        Detail
                      </a>
                      <a href='#' className='theme-btn-one'>
                        Save For Later
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mt-4'>
              <div className='card job-grid-box'>
                <div className='card-body p-4'>
                  <div className='favorite-icon'>
                    <a href='javascript:void(0)'>
                      <i className='uil-heart'>
                        <FaRegHeart />
                      </i>
                    </a>
                  </div>
                  <div>
                    <a href='#'>
                      <img
                        src='assets/images/img-04.png'
                        alt=''
                        className='img-fluid rounded-3'
                      />
                    </a>
                  </div>
                  <div className='mt-4'>
                    <a href='#' className='primary-link'>
                      <h5 className='fs-17 mb-1'>Project Leader</h5>
                    </a>
                    <p className='text-muted'>Jobcy Technology Pvt.Ltd</p>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <span className='badge bg-success-subtle text-success  fs-13 mt-1'>
                          $900/ Month
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-primary-subtle text-primary  fs-13 mt-1'>
                          2 Year
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-info-subtle text-info  fs-13 mt-1'>
                          Developer
                        </span>
                      </li>
                    </ul>
                    <div className='job_btn'>
                      <a href='#' className='theme-btn-two'>
                        Detail
                      </a>
                      <a href='#' className='theme-btn-one'>
                        Save For Later
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mt-4'>
              <div className='card job-grid-box active'>
                <div className='card-body p-4'>
                  <div className='favorite-icon'>
                    <a href='javascript:void(0)'>
                      <i className='uil-heart'>
                        <FaRegHeart />
                      </i>
                    </a>
                  </div>
                  <div>
                    <a href='#'>
                      <img
                        src='assets/images/img-01.png'
                        alt=''
                        className='img-fluid rounded-3'
                      />
                    </a>
                  </div>
                  <div className='mt-4'>
                    <a href='#' className='primary-link'>
                      <h5 className='fs-17 mb-1'>Graphic Designer</h5>
                    </a>
                    <p className='text-muted'>Jobcy Technology Pvt.Ltd</p>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <span className='badge bg-success-subtle text-success  fs-13 mt-1'>
                          $350/ Month
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-primary-subtle text-primary  fs-13 mt-1'>
                          Min 0.6 Year
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-info-subtle text-info fs-13 mt-1'>
                          Designer
                        </span>
                      </li>
                    </ul>
                    <div className='job_btn'>
                      <a href='#' className='theme-btn-two'>
                        Detail
                      </a>
                      <a href='#' className='theme-btn-one'>
                        Save For Later
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mt-4'>
              <div className='card job-grid-box bookmark-post'>
                <div className='card-body p-4'>
                  <div className='favorite-icon'>
                    <a href='javascript:void(0)'>
                      <i className='uil-heart'>
                        <FaRegHeart />
                      </i>
                    </a>
                  </div>
                  <div>
                    <a href='#'>
                      <img
                        src='assets/images/img-01.png'
                        alt=''
                        className='img-fluid rounded-3'
                      />
                    </a>
                  </div>
                  <div className='mt-4'>
                    <a href='#' className='primary-link'>
                      <h5 className='fs-17 mb-1'>Store Manager</h5>
                    </a>
                    <p className='text-muted'>Jobcy Technology Pvt.Ltd</p>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <span className='badge bg-success-subtle text-success fs-13 mt-1'>
                          $950/ Month
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-primary-subtle text-primary  fs-13 mt-1'>
                          Min. 1.5 Year
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-info-subtle text-info  fs-13 mt-1'>
                          Manager
                        </span>
                      </li>
                    </ul>
                    <div className='job_btn'>
                      <a href='#' className='theme-btn-two'>
                        Detail
                      </a>
                      <a href='#' className='theme-btn-one'>
                        Save For Later
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mt-4'>
              <div className='card job-grid-box active'>
                <div className='card-body p-4'>
                  <div className='favorite-icon'>
                    <a href='javascript:void(0)'>
                      <i className='uil-heart'>
                        <FaRegHeart />
                      </i>
                    </a>
                  </div>
                  <div>
                    <a href='#'>
                      <img
                        src='assets/images/img-01.png'
                        alt=''
                        className='img-fluid rounded-3'
                      />
                    </a>
                  </div>
                  <div className='mt-4'>
                    <a href='#' className='primary-link'>
                      <h5 className='fs-17 mb-1'>Product Designer</h5>
                    </a>
                    <p className='text-muted'>Jobcy Technology Pvt.Ltd</p>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <span className='badge bg-success-subtle text-success  fs-13 mt-1'>
                          $750/ Month
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-primary-subtle text-primary  fs-13 mt-1'>
                          Min. 1 Year
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-info-subtle text-info  fs-13 mt-1'>
                          Developer
                        </span>
                      </li>
                    </ul>
                    <div className='job_btn'>
                      <a href='#' className='theme-btn-two'>
                        Detail
                      </a>
                      <a href='#' className='theme-btn-one'>
                        Save For Later
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mt-4'>
              <div className='card job-grid-box'>
                <div className='card-body p-4'>
                  <div className='favorite-icon'>
                    <a href='javascript:void(0)'>
                      <i className='uil-heart'>
                        <FaRegHeart />
                      </i>
                    </a>
                  </div>
                  <div>
                    <a href='#'>
                      <img
                        src='assets/images/img-01.png'
                        alt=''
                        className='img-fluid rounded-3'
                      />
                    </a>
                  </div>
                  <div className='mt-4'>
                    <a href='#' className='primary-link'>
                      <h5 className='fs-17 mb-1'>Business Associate</h5>
                    </a>
                    <p className='text-muted'>Jobcy Technology Pvt.Ltd</p>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <span className='badge bg-success-subtle text-success  fs-13 mt-1'>
                          $780/ Month
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-primary-subtle text-primary fs-13 mt-1'>
                          Min. 1 Year
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-info-subtle text-info fs-13 mt-1'>
                          Developer
                        </span>
                      </li>
                    </ul>
                    <div className='job_btn'>
                      <a href='#' className='theme-btn-two'>
                        Detail
                      </a>
                      <a href='#' className='theme-btn-one'>
                        Save For Later
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 mt-4'>
              <div className='card job-grid-box'>
                <div className='card-body p-4'>
                  <div className='favorite-icon'>
                    <a href='javascript:void(0)'>
                      <i className='uil-heart'>
                        <FaRegHeart />
                      </i>
                    </a>
                  </div>
                  <div>
                    <a href='#'>
                      <img
                        src='assets/images/img-01.png'
                        alt=''
                        className='img-fluid rounded-3'
                      />
                    </a>
                  </div>
                  <div className='mt-4'>
                    <a href='#' className='primary-link'>
                      <h5 className='fs-17 mb-1'>Product Sales Specialist</h5>
                    </a>
                    <p className='text-muted'>Jobcy Technology Pvt.Ltd</p>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <span className='badge bg-success-subtle text-success fs-13 mt-1'>
                          $780/ Month
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-primary-subtle text-primary fs-13 mt-1'>
                          Min. 1 Year
                        </span>
                      </li>
                      <li className='list-inline-item'>
                        <span className='badge bg-info-subtle text-info fs-13 mt-1'>
                          Developer
                        </span>
                      </li>
                    </ul>
                    <div className='job_btn'>
                      <a href='#' className='theme-btn-two'>
                        Detail
                      </a>
                      <a href='#' className='theme-btn-one'>
                        Save For Later
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Brouse
