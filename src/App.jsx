import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import AllWork from './all'
import WorkForm from './form'
import MyContext from './myContext'


function App() {
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
  const RemoveWork = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I am sure!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Confirmed!',
          'Your action has been confirmed.',
          'success'
        )
      }
    });
  }
  return (
    <>
      <div className='top-header-form'>
        <MyContext.Provider value={{
          TrueSub, SetTrueSub, DeleteFaq, SetDeleteFaq , TugTrueSub , FuncDeleteFaq , RemoveWork
        }}>
          <WorkForm>
          </WorkForm>
          <AllWork>
          </AllWork>
        </MyContext.Provider>
      </div>
    </>
  )
}

export default App
