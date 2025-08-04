import { useState } from 'react'
import './index.css'
import AllWork from './all'
import WorkForm from './form'
import Mycont from './myContext'


function App() {
  const [TrueSub, SetTrueSub] = useState(false)

  const [Works, SetWorks] = useState([
    {
      id: 1,
      WorksString: "کار شماره ",
      IsDone: true
    },
    {
      id: 2,
      WorksString: "کار شماره ",
      IsDone: false
    },
    {
      id: 3,
      WorksString: "کار شماره ",
      IsDone: true
    },
    {
      id: 4,
      WorksString: "کار شماره ",
      IsDone: false
    }
    ,
    {
      id: 5,
      WorksString: "کار شماره ",
      IsDone: true
    }
  ])



  const TugBgForCloseIcon = (id) => {
    SetWorks(prevWorks =>
      prevWorks.map(work =>
        work.id === id ? { ...work, IsDone: false } : work
      )
    );
    Swal.fire({
      title: 'تایید شد!',
      text: "از کار های انجام شده حذف شد",
      icon: 'error',
      confirmButtonText: 'باشه'
    });
  };

  const TugBgForTickIcon = (id) => {
    SetWorks(prevWorks =>
      prevWorks.map(work =>
        work.id === id ? { ...work, IsDone: true } : work
      )
    );
    Swal.fire({
      title: 'تایید شد!',
      text: "به کار های انجام شده اضاف شد",
      icon: 'success',
      confirmButtonText: 'باشه'
    });
  };

  return (
    <>
      <div className='top-header-form'>
        <Mycont.Provider value={{
          TrueSub, SetTrueSub, SetWorks, Works, TugBgForCloseIcon, TugBgForTickIcon
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
