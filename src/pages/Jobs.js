import React from 'react'
import '../components/auth/style.css'
import 'react-icons'
import { LuLayoutGrid } from 'react-icons/lu'
import { FaList } from 'react-icons/fa6'
import { FaRegHeart } from 'react-icons/fa'
const Jobs = () => {
  return (
    <>
      <section className='page-title-box'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='text-center text-white'>
                <h3 className='mb-4'>Jobs</h3>
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
                        Jobs{' '}
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
      <div className='container'>
        <div className='job_inner_sec pt-5'>
          <div className='row gap-5'>
            <div className='col-md-3'>
              <div class='archive-filter '>
                <div class='inner-filter custom-scrollbar'>
                  <div class='civi-nav-filter'>
                    <div class='civi-filter-toggle'>
                      <span>Filter</span>
                    </div>
                    <div class='civi-clear-filter'>
                      <i class='far fa-sync fa-spin'></i>
                      <span>Clear All</span>
                    </div>
                  </div>
                  <div class='civi-menu-filter'>
                    <div class='filter-jobs-type'>
                      <div class='entry-filter'>
                        <h4>Jobs Type</h4>
                        <ul class='filter-control custom-scrollbar jobs-type'>
                          <li>
                            <input
                              type='checkbox'
                              class='custom-checkbox input-control'
                            />
                            <label for=''>Full Time</label>
                          </li>
                          <li>
                            <input
                              type='checkbox'
                              class='custom-checkbox input-control'
                            />
                            <label for=''>Internship</label>
                          </li>
                          <li>
                            <input
                              type='checkbox'
                              class='custom-checkbox input-control'
                            />
                            <label for=''>Part Time</label>
                          </li>
                          <li>
                            <input
                              type='checkbox'
                              class='custom-checkbox input-control'
                            />
                            <label for=''>Remote</label>
                          </li>
                        </ul>{' '}
                      </div>
                    </div>

                    <div class='filter-jobs-career'>
                      <div class='entry-filter'>
                        <h4>Location</h4>
                        <ul class='filter-control custom-scrollbar jobs-career'>
                          <li>
                            <input
                              type='checkbox'
                              class='custom-checkbox input-control'
                            />
                            <label for=''>Delhi NCR</label>
                          </li>
                          <li>
                            <input
                              type='checkbox'
                              class='custom-checkbox input-control'
                            />
                            <label for=''>Bangalore</label>
                          </li>
                          <li>
                            <input
                              type='checkbox'
                              class='custom-checkbox input-control'
                            />
                            <label for=''>Pune</label>
                          </li>
                          <li>
                            <input
                              type='checkbox'
                              class='custom-checkbox input-control'
                            />
                            <label for=''>Mumbai</label>
                          </li>
                        </ul>{' '}
                      </div>
                    </div>
                    <div class='filter-jobs-career'>
                      <div class='entry-filter'>
                        <h4>Career level</h4>
                        <ul class='filter-control custom-scrollbar jobs-career'>
                          <li>
                            <input
                              type='checkbox'
                              class='custom-checkbox input-control'
                            />
                            <label for=''>Frontend Developer</label>
                          </li>
                          <li>
                            <input
                              type='checkbox'
                              class='custom-checkbox input-control'
                            />
                            <label for=''>Backend Developer</label>
                          </li>
                          <li>
                            <input
                              type='checkbox'
                              class='custom-checkbox input-control'
                            />
                            <label for=''>Designer</label>
                          </li>
                          <li>
                            <input
                              type='checkbox'
                              class='custom-checkbox input-control'
                            />
                            <label for=''>Fullstack Developer</label>
                          </li>
                        </ul>{' '}
                      </div>
                    </div>

                    <div class='filter-jobs-experience'>
                      <div class='entry-filter'>
                        <h4>Jobs Experience</h4>
                        <ul class='filter-control custom-scrollbar jobs-experience'>
                          <li>
                            <input
                              type='checkbox'
                              class='custom-checkbox input-control'
                            />
                            <label for=''>1 - 2 Years</label>
                          </li>
                          <li>
                            <input type='checkbox' />
                            <label for=''>3 - 5 Years</label>
                          </li>
                          <li>
                            <input
                              type='checkbox'
                              class='custom-checkbox input-control'
                            />
                            <label for=''>6 - 9 Years</label>
                          </li>
                          <li>
                            <input
                              type='checkbox'
                              class='custom-checkbox input-control'
                            />
                            <label for=''>10+ Years</label>
                          </li>
                        </ul>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-8'>
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
                            <a
                              className='dropdown-item'
                              href='manage-jobs.html'
                            >
                              Manage Jobs
                            </a>
                          </li>
                          <li>
                            <a
                              className='dropdown-item'
                              href='bookmark-jobs.html'
                            >
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
                <div className='col-lg-6 col-md-6 mt-4'>
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
                            As a Product Designer, you will work within a
                            Product Delivery Team fused with UX, engineering,
                            product and data talent.
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
                          <a href='/jobDetail' className='theme-btn-two'>
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

                <div className='col-lg-6 col-md-6 mt-4'>
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
                            As a Product Designer, you will work within a
                            Product Delivery Team fused with UX, engineering,
                            product and data talent.
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
                          <a href='/jobDetail' className='theme-btn-two'>
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

                <div className='col-lg-6 col-md-6 mt-4'>
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
                            As a Product Designer, you will work within a
                            Product Delivery Team fused with UX, engineering,
                            product and data talent.
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
                          <a href='/jobDetail' className='theme-btn-two'>
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

                <div className='col-lg-6 col-md-6 mt-4'>
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
                            As a Product Designer, you will work within a
                            Product Delivery Team fused with UX, engineering,
                            product and data talent.
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
                          <a href='/jobDetail' className='theme-btn-two'>
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

                <div className='col-lg-6 col-md-6 mt-4'>
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
                            As a Product Designer, you will work within a
                            Product Delivery Team fused with UX, engineering,
                            product and data talent.
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
                          <a href='/jobDetail' className='theme-btn-two'>
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

                <div className='col-lg-6 col-md-6 mt-4'>
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
                            As a Product Designer, you will work within a
                            Product Delivery Team fused with UX, engineering,
                            product and data talent.
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
                          <a href='/jobDetail' className='theme-btn-two'>
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
        </div>
      </div>
    </>
  )
}

export default Jobs
