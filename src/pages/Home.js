import React from 'react'
import JobCard from '../components/common/JobCard'
import Header from '../components/common/Header'
import '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export const Home = () => {
  return (
    <>
      <section className='bg-home2' id='home'>
        <div className='container'>
          <div className='row align-items-center justify-content-center text-center'>
            <div className='col-lg-12'>
              <div className='mb-4 pb-3'>
                <h6 className='sub-title'>We have 150,000+ live jobs</h6>
                <h1 className='display-5 fw-semibold mb-3'>
                  Find your dream jobs with{' '}
                  <span className='text-content fw-bold'>Jobcy</span>
                </h1>
                <p className='lead text-muted mb-0 fs-6'>
                  Find jobs, create trackable resumes and enrich your
                  applications.Carefully crafted after analyzing the needs of
                  different industries.
                </p>
              </div>
              <form action='#'>
                <div className='registration-form'>
                  <div className='row g-0'>
                    <div className='col-md-12'>
                      <div className='filter-search-form filter-border mt-3 mt-md-0'>
                        <input
                          type='search'
                          id='job-title'
                          className='form-control filter-input-box'
                          placeholder='Job, Company name...'
                        />
                        <button
                          aria-label='Submit'
                          id='searchBtn'
                          className='search_btn theme-btn-one'
                        >
                          <SearchIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <JobCard />
    </>
  )
}
