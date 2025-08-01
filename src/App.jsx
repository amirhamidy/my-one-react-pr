import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import AllWork from './all'
import WorkForm from './form'
import Mycont from './myContext'


function App() {
  const [TrueSub, SetTrueSub] = useState(false)
  const [DeleteFaq, SetDeleteFaq] = useState(false)
  const [Works, SetWorks] = useState([
    {
      id: 1,
      WorksString: "رفتن آو بیرن ",
      IsDone: true
    },
    {
      id: 2,
      WorksString: "رفتن آو میرن ",
      IsDone: false
    },
    {
      id: 3,
      WorksString: "بورررر",
      IsDone: true
    },
    {
      id: 4,
      WorksString: "بوگذه",
      IsDone: false
    }
    ,
    {
      id: 5,
      WorksString: "بد دگه ",
      IsDone: true
    }
  ])


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
        <Mycont.Provider value={{
          TrueSub, SetTrueSub, DeleteFaq, SetDeleteFaq, TugTrueSub, FuncDeleteFaq, RemoveWork, Works, SetWorks
        }}>
          <WorkForm>
          </WorkForm>
          <AllWork>
          </AllWork>
        </Mycont.Provider>
      </div>
    </>
  )
}

export default App
