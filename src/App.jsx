import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)


  const [TrueSub, SetTrueSub] = useState(false)
  const [DeleteFaq, SetDeleteFaq] = useState(false)




  const TugTrueSub = () => {

    if (TrueSub === false) {
      SetTrueSub(true)
      Swal.fire({
        title: 'success',
        text: 'Your information was successfully registered.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6'
      });
    }
    else {
      SetTrueSub(false)
      Swal.fire({
        text: 'You have already successfully registered this item.',
        icon: 'warning',
        confirmButtonText: 'OK',
        confirmButtonColor: 'red'
      });
    }
  };
  const FuncDeleteFaq = () => {

    if (DeleteFaq === false) {
      SetTrueSub(true)
      Swal.fire({
        title: 'deleted!',
        text: 'This task has been removed from the to-do list!',
        icon: 'danger',
        confirmButtonText: 'OK',
        confirmButtonColor: 'red'
      });
    }
  };
  return (
    <>
      <div className='top-header-form'>
        <form className='row container mb-3'>
          <div className='col-md-10  py-3'>
            <input className='form-control' type="text" placeholder='insert your work' />
          </div>
          <div className='col-md-2 text-center py-3'>
            <button className='bg-success btn text-light' type='submit'>
              ثبت
            </button>
          </div>
        </form>

        <div className='d-flex justify-content-center flex-column container mt-3'>
          <div className='w-100 d-flex justify-content-between my-2'>
            <span className='w-50 text-end px-3'>going to work</span>
            <span className='w-50 text-start px-3'>
              <span className='tick-icon mx-2'>
                <svg onClick={TugTrueSub} className='text-success'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="2em"
                  height="2em"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m2.75 8.75l3.5 3.5l7-7.5"
                  ></path>
                </svg>
              </span>
              <span className='tick-icon mx-2'>
                <svg onClick={FuncDeleteFaq} className='text-warning'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15 15"
                  width="2em"
                  height="2em"
                >
                  <path
                    fill="currentColor"
                    d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
                  ></path>
                </svg>
              </span>
              <span className='tick-icon mx-2'>
                <svg className='text-danger'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="2em"
                  height="2em"
                >
                  <path
                    fill="currentColor"
                    d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3zM14 5h-3l-1-1H6L5 5H2v2h12z"
                  ></path>
                </svg>
              </span>
            </span>
          </div>

          <div className='w-100 d-flex justify-content-between my-2'>
            <span className='w-50 text-end px-3'>going to work</span>
            <span className='w-50 text-start px-3'>
              <span className='tick-icon mx-2'>
                <svg onClick={TugTrueSub} className='text-success'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="2em"
                  height="2em"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m2.75 8.75l3.5 3.5l7-7.5"
                  ></path>
                </svg>
              </span>
              <span className='tick-icon mx-2'>
                <svg onClick={FuncDeleteFaq} className='text-warning'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15 15"
                  width="2em"
                  height="2em"
                >
                  <path
                    fill="currentColor"
                    d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
                  ></path>
                </svg>
              </span>
              <span className='tick-icon mx-2'>
                <svg className='text-danger'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="2em"
                  height="2em"
                >
                  <path
                    fill="currentColor"
                    d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3zM14 5h-3l-1-1H6L5 5H2v2h12z"
                  ></path>
                </svg>
              </span>
            </span>
          </div>

          <div className='w-100 d-flex justify-content-between my-2'>
            <span className='w-50 text-end px-3'>going to work</span>
            <span className='w-50 text-start px-3'>
              <span className='tick-icon mx-2'>
                <svg onClick={TugTrueSub} className='text-success'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="2em"
                  height="2em"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m2.75 8.75l3.5 3.5l7-7.5"
                  ></path>
                </svg>
              </span>
              <span className='tick-icon mx-2'>
                <svg onClick={FuncDeleteFaq} className='text-warning'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15 15"
                  width="2em"
                  height="2em"
                >
                  <path
                    fill="currentColor"
                    d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
                  ></path>
                </svg>
              </span>
              <span className='tick-icon mx-2'>
                <svg className='text-danger'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="2em"
                  height="2em"
                >
                  <path
                    fill="currentColor"
                    d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3zM14 5h-3l-1-1H6L5 5H2v2h12z"
                  ></path>
                </svg>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
