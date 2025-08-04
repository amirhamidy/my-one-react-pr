import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
      IsDone: true,
      display: true
    },
    {
      id: 2,
      WorksString: "کار شماره ",
      IsDone: false
    },
    {
      id: 3,
      WorksString: "کار شماره ",
      IsDone: true,
      display: true
    },
    {
      id: 4,
      WorksString: "کار شماره ",
      IsDone: false,
      display: true
    }
    ,
    {
      id: 5,
      WorksString: "کار شماره ",
      IsDone: true,
      display: true
    }
  ])



  const TugBgForCloseIcon = (id) => {
    SetWorks(prevWorks =>
      prevWorks.map(work =>
        work.id === id ? { ...work, IsDone: false } : work
      )
    );
  };

  const TugBgForTickIcon = (id) => {
    SetWorks(prevWorks =>
      prevWorks.map(work =>
        work.id === id ? { ...work, IsDone: true } : work
      )
    );
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
