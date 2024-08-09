import React, { useState } from 'react'
import '../auth/style.css'
import { MdEdit } from 'react-icons/md'
import { FaEye, FaTimes, FaPhoneAlt, FaClock, FaCheck } from 'react-icons/fa'

import { Modal, Button } from 'react-bootstrap'
const Addjob = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)
  return (
    <>
      <section className='page-title-box'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='text-center text-white'>
                <h3 className='mb-4'>Job Detail</h3>
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
        <div className='company_search py-5'>
          <div class='card mb-4 p-3'>
            <div class='Visitor-card-input'>
              <div class='col-xl-3 col-lg-3 col-md-6 col-12'>
                <div class='mb-3'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Filter by company name & role'
                  />
                </div>
              </div>
              <div class='visitor-sub'>
                <button class='theme-btn-one' onClick={handleShow}>
                  New Jobs
                </button>
              </div>
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-body'>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th class='header_text'>Company Name</th>
                          <th class='header_text'>Role</th>
                          <th class='header_text'>Date</th>

                          <th class='header_text'>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='tbody_text'>
                            <p class='text-xs font-weight-bold mb-0'>Google</p>
                          </td>
                          <td className='tbody_text'>
                            <p class='text-xs font-weight-bold mb-0'>
                              Fullstack Developer
                            </p>
                          </td>
                          <td className='tbody_text'>
                            <p class='text-xs font-weight-bold mb-0'>
                              08-08-2024
                            </p>
                          </td>

                          <td className='align-middle tbody_text'>
                            <div
                              class='text-secondary font-weight-bold text-xs'
                              data-toggle='tooltip'
                              data-original-title='Edit user'
                            >
                              <div class='d-flex gap-4'>
                                <div>
                                  <a href=''>
                                    <MdEdit className='fs-5' />
                                  </a>
                                </div>
                                <div>
                                  <a href=''>
                                    <FaEye className='fs-5' />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className='text-center text-secondary'>
            A list of your recent posted jobs
          </p>
        </div>
      </div>

      {/* add-job-modal */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        className='edit_modal'
      >
        <Modal.Body>
          {/* Add your form fields here */}
          <form
            name='loginform'
            id='loginform'
            action='https://listit.smartdemowp.com/wp-login.php'
            method='post'
          >
            <Button
              variant='link'
              onClick={handleClose}
              className='ms-auto text-dark'
            >
              <FaTimes />
            </Button>
            <h4 className='mb-3'>Update Job</h4>
            <div className='row'>
              <div className='col-md-6'>
                <p className='login-username form-group'>
                  <label htmlFor='user_login'>Title</label>
                  <input
                    type='text'
                    className='input form-control'
                    placeholder=''
                  />
                </p>
              </div>
              <div className='col-md-6'>
                <p className='login-username form-group'>
                  <label htmlFor='user_login'>Description</label>
                  <input
                    type='text'
                    className='input form-control'
                    placeholder=''
                  />
                </p>
              </div>
              <div className='col-md-6'>
                <p className='login-username form-group'>
                  <label htmlFor='user_login'>Requirements</label>
                  <input
                    type='text'
                    className='input form-control'
                    placeholder=''
                  />
                </p>
              </div>
              <div className='col-md-6'>
                <p className='login-username form-group'>
                  <label htmlFor='user_login'>salary</label>
                  <input
                    type='text'
                    className='input form-control'
                    placeholder=''
                  />
                </p>
              </div>
              <div className='col-md-6'>
                <p className='login-username form-group'>
                  <label htmlFor='user_login'>Location</label>
                  <input
                    type='text'
                    className='input form-control'
                    placeholder=''
                  />
                </p>
              </div>
              <div className='col-md-6'>
                <p className='login-username form-group'>
                  <label htmlFor='user_login'>Job Type</label>
                  <input
                    type='text'
                    className='input form-control'
                    placeholder=''
                  />
                </p>
              </div>
              <div className='col-md-6'>
                <p className='login-username form-group'>
                  <label htmlFor='user_login'>Experience Level</label>
                  <input
                    type='text'
                    className='input form-control'
                    placeholder=''
                  />
                </p>
              </div>
              <div className='col-md-6'>
                <p className='login-username form-group'>
                  <label for='user_login'>No Of Position</label>
                  <input
                    type='number'
                    id=''
                    className='input form-control'
                    placeholder='0'
                  />
                </p>
              </div>
              <div className='col-md-6'>
                <p className='login-username form-group'>
                  <label for='user_login'>Select Company</label>
                  <select class='form-select' id='exampleFormControlSelect1'>
                    <option>Select a company</option>
                    <option>Google</option>
                    <option>Microsoft</option>
                    <option>Apple</option>
                    <option>Amazon</option>
                  </select>
                </p>
              </div>
            </div>

            <p className='login-submit'>
              <input
                type='submit'
                name='wp-submit'
                id='wp-submit'
                className='button button-primary theme-btn-one'
                value='Post New Job'
              />
            </p>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Addjob
