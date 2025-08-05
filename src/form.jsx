import { StrictMode, useContext, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Mycont from './myContext'


const WorkForm = () => {

    const [ NewWorkString, SetNewWorkString ] = useState("")
    const {Works , SetWorks} = useContext(Mycont)

    const ChangeNewWork = (ev)=>{
        SetNewWorkString(ev.target.value)
    }

    const AddNewWork = (event)=>{

        event.preventDefault()
        SetWorks([... Works ,{id : Math.floor(Math.random()*9) + 1 , WorksString : NewWorkString , IsDone : false } ])
       
    }





    return (
        <form className='row container mb-3'>
            <div className='col-md-10  py-3'>
                <input id='xox' className='form-control' type="text" placeholder='INSERT YOUR WORK' value={NewWorkString} onChange={ChangeNewWork}/>
            </div>
            <div className='col-md-2 text-center py-3'>
                <button type='submit' onClick={AddNewWork} className='bg-success btn text-light'>
                    SUBMIT
                </button>
            </div>
        </form>
    )
}

export default WorkForm