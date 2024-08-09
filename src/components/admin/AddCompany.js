import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../auth/style.css'
import { MdEdit } from 'react-icons/md'
import { FaEye } from 'react-icons/fa'

const AddCompany = () => {
  const navigate = useNavigate()

  const handleNewCompany = () => {
    navigate('/companies')
  }

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
                        Jobs
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
      <div className='container'>
        <div className='company_search py-5'>
          <div className='card mb-4 p-3'>
            <div className='Visitor-card-input'>
              <div className='col-xl-3 col-lg-3 col-md-6 col-12'>
                <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Filter by name'
                  />
                </div>
              </div>
              <div className='visitor-sub'>
                <button className='theme-btn-one' onClick={handleNewCompany}>
                  New Company
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
                          <th className='header_text'>Logo</th>
                          <th className='header_text'>Name</th>
                          <th className='header_text'>Date</th>

                          <th className='header_text'>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='tbody_text'>
                            <img src='/assets/images/google.png' />
                          </td>
                          <td className='tbody_text'>
                            <p className='text-xs font-weight-bold mb-0'>
                              Google
                            </p>
                          </td>
                          <td className='tbody_text'>
                            <p className='text-xs font-weight-bold mb-0'>
                              08-08-2024
                            </p>
                          </td>

                          <td className='align-middle tbody_text'>
                            <div
                              className='text-secondary font-weight-bold text-xs'
                              data-toggle='tooltip'
                              data-original-title='Edit user'
                            >
                              <div className='d-flex gap-4'>
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
            A list of your recent registered companies
          </p>
        </div>
      </div>
    </>
  )
}

export default AddCompany
