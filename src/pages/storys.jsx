

const Sotry = () => {


    const StoryDeta = [
            { StoryCode: '1', StorySrcImg: 'src/assets/react.svg', StoryTitle: 'این یک نمونه تست هست', StoryBolPul: false, StoryDate: '2025/12/4' },
            { StoryCode: '2', StorySrcImg: 'src/assets/react.svg', StoryTitle: 'این یک نمونه تست هست', StoryBolPul: true, StoryDate: '2025/12/4' },
            { StoryCode: '3', StorySrcImg: 'src/assets/react.svg', StoryTitle: 'این یک نمونه تست هست', StoryBolPul: false, StoryDate: '2025/12/4' },
            { StoryCode: '4', StorySrcImg: 'src/assets/react.svg', StoryTitle: 'این یک نمونه تست هست', StoryBolPul: true, StoryDate: '2025/12/4' },
            { StoryCode: '5', StorySrcImg: 'src/assets/react.svg', StoryTitle: 'این یک نمونه تست هست', StoryBolPul: false, StoryDate: '2025/12/4' },
        ]
    return (
        <>
            <form className="w-100 d-flex justify-content-around align-items-baseline  text-center flex-wrap px-3 py-4 mb-2 container cs-bg rounded-1">
                <div className="px-2 w-right text-light cs-fs-14  text-right w-25">
                    <input className="form-control-custom rounded-1" type="text" placeholder=" جستجو ی استوری.... " />
                </div>
                <div className="px-2 my-2 w-right text-light cs-fs-14 d-flex justify-content-around text-right w-75">
                    <ul className="fill-titr">
                        وضعیت نمایش
                        <svg className="mx-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            width="1em"
                            height="1em"
                        >
                            <path
                                fill="currentColor"
                                d="M8 3C4.511 3 1.486 5.032 0 8c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-1.486-2.968-4.511-5-8-5m3.945 2.652c.94.6 1.737 1.403 2.335 2.348a7.6 7.6 0 0 1-2.335 2.348a7.33 7.33 0 0 1-7.889 0A7.6 7.6 0 0 1 1.721 8a7.6 7.6 0 0 1 2.52-2.462a4 4 0 1 0 7.518 0q.093.056.185.114zM8 6.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 6.5"
                            ></path>
                        </svg>

                        <ul className="fill-list">
                            <li>این یک نمونه تست هست</li>
                            <li>این یک نمونه تست هست</li>
                            <li>این یک نمونه تست هست</li>
                            <li>این یک نمونه تست هست</li>
                            <li>این یک نمونه تست هست</li>
                            <li>این یک نمونه تست هست</li>
                            <li>این یک نمونه تست هست</li>
                            <li>این یک نمونه تست هست</li>
                        </ul>
                    </ul>
                    <ul className="fill-titr">
                        مرتب سازی
                        <svg className="mx-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="1.3em"
                            height="1.3em"
                        >
                            <path
                                fill="currentColor"
                                d="M8 4h13v2H8zM4.5 6.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 6.9a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M8 11h13v2H8zm0 7h13v2H8z"
                            ></path>
                        </svg>
                        <ul className="fill-list">
                            <li>این یک نمونه تست هست</li>
                            <li>این یک نمونه تست هست</li>
                            <li>این یک نمونه تست هست</li>
                            <li>این یک نمونه تست هست</li>
                            <li>این یک نمونه تست هست</li>
                            <li>این یک نمونه تست هست</li>
                            <li>این یک نمونه تست هست</li>
                            <li>این یک نمونه تست هست</li>
                        </ul>
                    </ul>
                </div>
            </form>
            <div className="d-flex justify-content-start flex-column text-right list-box-sidebar mx-1 px-1 mt-4">
                {StoryDeta.map((itemsS) =>{
                    <div className="d-flex justify-content-start flex-column text-right list-box-sidebar mx-1 px-1 mt-4">
                        <span>
                            {itemsS.StoryCode}
                        </span>
                    </div>
                })}
            </div>




        </>
    )
}

export default Sotry