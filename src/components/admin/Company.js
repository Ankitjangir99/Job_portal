import React, { useState } from 'react'
import '../auth/style.css'

const Company = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: '',
    phoneNumber: '',
    review: ''
  })

  // Handle field change
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Proceed to the next step
  const nextStep = () => {
    setStep(step + 1)
  }

  // Go back to the previous step
  const prevStep = () => {
    setStep(step - 1)
  }

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    alert('Form submitted successfully!')
    // Perform the form submission here
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
      <div className='company_popup mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <form onSubmit={handleSubmit} id='loginform'>
                {step === 1 && (
                  <div>
                    <h4>Company Information</h4>
                    <p>
                      What would you like to give company name? you can change
                      this later.
                    </p>
                    <div className='mb-5'>
                      <label className='form-label'>Company Name</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Enter company name'
                        name='companyName'
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='d-flex gap-3'>
                      <button
                        type='button'
                        className='theme-btn-two'
                        onClick={nextStep}
                      >
                        Cancel
                      </button>
                      <button
                        type='button'
                        className='theme-btn-one'
                        onClick={nextStep}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h4 className='mb-3'>Company Setup</h4>
                    <div className='row mb-4'>
                      <div className='col-md-6'>
                        <p className='login-username form-group'>
                          <label htmlFor='user_login'>Company Name</label>
                          <input
                            type='text'
                            className='input form-control'
                            placeholder='Microsoft'
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
                          <label htmlFor='user_login'>Website</label>
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
                        <p className='form-group'>
                          {' '}
                          <label for='user_pass'>Logo</label>
                          <input
                            type='file'
                            class='form-control'
                            id='inputGroupFile01'
                          />
                        </p>
                      </div>
                    </div>
                    <div className='d-flex gap-2'>
                      <button
                        type='button'
                        className='theme-btn-two'
                        onClick={prevStep}
                      >
                        Back
                      </button>
                      <button
                        type='button'
                        className='theme-btn-one'
                        // onClick={nextStep}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Company
