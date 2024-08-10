import React, { useState } from 'react'
import '../components/auth/style.css'
import { MdEdit } from 'react-icons/md'
import { FaEye, FaTimes, FaPhoneAlt, FaClock, FaCheck } from 'react-icons/fa'
import { LiaLanguageSolid, LiaUniversitySolid } from 'react-icons/lia'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { MdWorkOutline } from 'react-icons/md'
import { Modal, Button } from 'react-bootstrap'

const Profile = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  return (
    <>
      <div className='profile_sec'>
        <div className='container'>
          <div className='company_search py-5'>
            <div className='row mb-4'>
              <div className='col-md-12 col-lg-12'>
                <div className='card'>
                  <div className='card-body p-5'>
                    <div className='row align-items-center'>
                      <div className='col '>
                        <div className='d-flex align-items-center'>
                          <div className='position-relative'>
                            <img
                              src='assets/images/avatar.jpg'
                              alt=''
                              className='rounded-circle img-fluid'
                            />
                            <div className='position-absolute top-50 start-100 translate-middle'>
                              <img
                                src='assets/images/flags/baha_flag.jpg'
                                alt=''
                                className='rounded-circle thumb-sm border border-3 border-white'
                              />
                            </div>
                          </div>
                          <div className='flex-grow-1 text-truncate ms-3'>
                            <h5 className='m-0 fs-3 fw-bold'>Karen Savage</h5>
                            <p className='text-muted mb-0'>@karen</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-auto text-end'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-primary py-2 px-3 d-inline-flex align-items-center'
                          onClick={handleShow}
                        >
                          <MdEdit className='fs-5 me-2' />
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className='mt-3'>
                      <p className='text-muted fw-medium mb-3'>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                      <span className='text-body fw-semibold mb-2 d-block'>
                        Skills
                      </span>
                      <div className='mb-3 d-flex gap-2'>
                        <span className='badge border border-dark text-dark fs-12 fw-medium mb-1'>
                          Javascript
                        </span>
                        <span className='badge border border-dark text-dark fs-12 fw-medium mb-1'>
                          Python
                        </span>
                        <span className='badge border border-dark text-dark fs-12 fw-medium mb-1'>
                          Angular
                        </span>
                        <span className='badge border border-dark text-dark fs-12 fw-medium mb-1'>
                          Reactjs
                        </span>
                        <span className='badge border border-dark text-dark fs-12 fw-medium mb-1'>
                          Flutter
                        </span>
                      </div>
                      <ul className='list-unstyled mb-0'>
                        <li className='mt-2'>
                          <i className=''>
                            <MdWorkOutline />
                          </i>{' '}
                          <b> Position </b> : Full Stack Developer
                        </li>
                        <li className='mt-2'>
                          <i className=''>
                            <LiaUniversitySolid />
                          </i>{' '}
                          <b> Education </b> : Stanford University
                        </li>
                        <li className='mt-2'>
                          <i className=''>
                            <LiaLanguageSolid />
                          </i>{' '}
                          <b> Languages </b> : English, French, Spanish
                        </li>
                        <li className='mt-2'>
                          <i className=''>
                            <FaPhoneAlt />
                          </i>{' '}
                          <b> Phone </b> : +91 23456 78910
                        </li>
                        <li className='mt-2'>
                          <i className=''>
                            <HiOutlineMailOpen />
                          </i>{' '}
                          <b> Email </b> : mannat.theme@gmail.com
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-4'>
              <div className='col-md-12'>
                <div className='card'>
                  <div className='card-body p-5'>
                    <h4 className='card-title mb-3'>Applied Jobs</h4>
                    <div className='table-responsive'>
                      <table className='table'>
                        <thead>
                          <tr>
                            <th className='header_text'>Date</th>
                            <th className='header_text'>Job Role</th>
                            <th className='header_text'>Company</th>

                            <th className='header_text text-end'>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='tbody_text'>
                              <p className='text-xs font-weight-bold mb-0'>
                                08-08-2024
                              </p>
                            </td>
                            <td className='tbody_text'>
                              <p className='text-xs font-weight-bold mb-0'>
                                Backend Developer
                              </p>
                            </td>
                            <td className='tbody_text'>
                              <p className='text-xs font-weight-bold mb-0'>
                                JobHunt
                              </p>
                            </td>

                            <td className='align-middle tbody_text text-end'>
                              <span className='badge bg-secondary-subtle text-secondary p-2'>
                                <i className='me-1'>
                                  <FaClock />
                                </i>{' '}
                                Pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className='tbody_text'>
                              <p className='text-xs font-weight-bold mb-0'>
                                08-08-2024
                              </p>
                            </td>
                            <td className='tbody_text'>
                              <p className='text-xs font-weight-bold mb-0'>
                                Backend Developer
                              </p>
                            </td>
                            <td className='tbody_text'>
                              <p className='text-xs font-weight-bold mb-0'>
                                JobHunt
                              </p>
                            </td>

                            <td className='align-middle tbody_text text-end'>
                              <span className='badge bg-success-subtle text-success p-2'>
                                <i className=' me-1'>
                                  <FaCheck />
                                </i>{' '}
                                Completed
                              </span>
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
              A list of your recent registered companies
            </p>
          </div>
        </div>
      </div>

      {/* Modal for Edit Profile */}
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
            <h4 className='mb-3'>Update Profile</h4>
            <p className='login-username form-group'>
              <label htmlFor='user_login'>Full Name</label>
              <input
                type='text'
                className='input form-control'
                placeholder='Name'
              />
            </p>
            <p className='login-username form-group'>
              <label htmlFor='user_login'>Email</label>
              <input
                type='email'
                className='input form-control'
                placeholder='Email'
              />
            </p>
            <p className='login-username form-group'>
              <label htmlFor='user_login'>Phone Number</label>
              <input
                type='number'
                className='input form-control'
                placeholder='+919767856423'
              />
            </p>
            <p className='login-password form-group'>
              <label htmlFor='user_pass'>Bio</label>
              <input
                type='text'
                name='pwd'
                className='input form-control'
                placeholder='Bio'
                size='20'
              />
            </p>

            <p className='form-group'>
              {' '}
              <label htmlFor='user_pass'>Resume</label>
              <input
                type='file'
                className='form-control'
                id='inputGroupFile01'
              />
            </p>
            <p className='login-submit'>
              <input
                type='submit'
                name='wp-submit'
                id='wp-submit'
                className='button button-primary theme-btn-one'
                value='Update'
              />
            </p>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Profile
