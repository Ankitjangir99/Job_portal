import React from 'react'
import '../common/style.css'

const JobCard = () => {
  return (
    <section className='latest_job'>
      <div className='container'>
        <h1 className='fw-semibold mb-5 text-content'>
          Latest and Top
          <span className='text-dark fw-bold'> Job Opening</span>
        </h1>

        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <ul
              className='job-list-menu nav nav-pills nav-justified flex-column flex-sm-row mb-4'
              id='pills-tab'
              role='tablist'
            >
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link active'
                  id='recent-jobs-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#recent-jobs'
                  type='button'
                  role='tab'
                  aria-controls='recent-jobs'
                  aria-selected='true'
                >
                  Recent Jobs
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link'
                  id='featured-jobs-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#featured-jobs'
                  type='button'
                  role='tab'
                  aria-controls='featured-jobs'
                  aria-selected='false'
                  tabindex='-1'
                >
                  Featured Jobs
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link'
                  id='freelancer-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#freelancer'
                  type='button'
                  role='tab'
                  aria-controls='freelancer'
                  aria-selected='false'
                  tabindex='-1'
                >
                  Freelancer
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link'
                  id='part-time-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#part-time'
                  type='button'
                  role='tab'
                  aria-controls='part-time'
                  aria-selected='false'
                  tabindex='-1'
                >
                  Part Time
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link'
                  id='full-time-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#full-time'
                  type='button'
                  role='tab'
                  aria-controls='full-time'
                  aria-selected='false'
                  tabindex='-1'
                >
                  Full Time
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className='tab-content' id='pills-tabContent'>
          <div
            class='tab-pane fade show active'
            id='recent-jobs'
            role='tabpanel'
            aria-labelledby='recent-jobs-tab'
            tabindex='0'
          >
            <div className='row'>
              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box bookmark-post'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box bookmark-post'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box bookmark-post'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class='tab-pane fade'
            id='featured-jobs'
            role='tabpanel'
            aria-labelledby='featured-jobs-tab'
            tabindex='0'
          >
            <div className='row'>
              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box bookmark-post'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box bookmark-post'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box bookmark-post'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class='tab-pane fade'
            id='freelancer'
            role='tabpanel'
            aria-labelledby='freelancer-tab'
            tabindex='0'
          >
            <div className='row'>
              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box bookmark-post'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box bookmark-post'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box bookmark-post'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class='tab-pane fade'
            id='part-time'
            role='tabpanel'
            aria-labelledby='part-time-tab'
            tabindex='0'
          >
            <div className='row'>
              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box bookmark-post'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box bookmark-post'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box bookmark-post'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class='tab-pane fade'
            id='full-time'
            role='tabpanel'
            aria-labelledby='full-time-tab'
            tabindex='0'
          >
            <div className='row'>
              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box bookmark-post'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box bookmark-post'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box bookmark-post'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4'>
                <div className='card job-grid-box'>
                  <div className='card-body p-4'>
                    <div className='favorite-icon'>
                      <a href='javascript:void(0)'>
                        <i className='uil uil-heart-alt'></i>
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
                    </div>
                    <div className='job-grid-content mt-3'>
                      <p className='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobCard
