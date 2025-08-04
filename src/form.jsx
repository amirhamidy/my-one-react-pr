import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'





const WorkForm = () => {
    return (
        <form className='row container mb-3'>
            <div className='col-md-10  py-3'>
                <input className='form-control' type="text" placeholder='INSERT YOUR WORK' />
            </div>
            <div className='col-md-2 text-center py-3'>
                <span className='bg-success btn text-light'>
                    SUBMIT
                </span>
            </div>
        </form>
    )
}

export default WorkForm