import { useContext } from 'react'
import Mycont from './myContext'

const AllWork = () => {
    const MYcc = useContext(Mycont)
    const { Works, SetWorks } = useContext(Mycont);

    return (
        <div className='d-flex justify-content-center flex-column container mt-3'>
            {
                Works.map((c) => {
                    return (
                        <div key={c.id} className={`w-100 d-flex justify-content-between my-1 py-2 ${c.IsDone ? "true-work" : "false-work"} `}>
                            <span className='w-50 text-end px-3'>{c.WorksString} - {c.id} </span>
                            <span className='w-50 text-start px-3'>
                                <span className={` ${!c.IsDone ? "mx-2 tick-icon" : "d-none mx-0"}`}>
                                    <svg key={Math.random()} onClick={() => MYcc.TugBgForTickIcon(c.id)} className={'text-success '}
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
                                <span className={`${!c.IsDone ? "d-none mx-0" : "mx-2 tick-icon"}`}>
                                    <svg key={Math.random()} onClick={() => MYcc.TugBgForCloseIcon(c.id)} className={'text-warning'}
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
                                    <svg key={Math.random()} className='text-danger'
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
                    )
                })
            }
        </div >
    )
}

export default AllWork