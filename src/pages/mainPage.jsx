


const MainPage = () => {
    return (


        <form className="w-100 d-flex justify-content-center align-items-center text-center flex-wrap px-3 py-3 mt-5 container cs-bg rounded-1">
            <div className="px-2 my-2 w-right text-light cs-fs-14  text-right w-50">
                نام ادمین
                <input className="form-control-custom my-2 rounded-1" type="text" placeholder="" />
            </div>
            <div className="px-2 my-2 w-right text-light cs-fs-14  text-right w-50">
                نام خانوادگی ادمین
                <input className="form-control-custom my-2 rounded-1" type="text" placeholder="" />
            </div>
            <div className="px-2 my-2 w-right text-light cs-fs-14  text-right w-50">
                ایمیل ادمین ((( غیر قابل تغییر )))
                <input className="form-control-custom my-2 rounded-1" type="email" placeholder="" />
            </div>
            <div className="px-2 my-2 w-right text-light cs-fs-14  text-right w-50">
                شماره تلفن ادمین
                <input className="form-control-custom my-2 rounded-1" type="text" placeholder="" />
            </div>
            <div className="px-2 w-100 w-right ">
                <button className="px-2 py-1 text-light cs-fs-14 bg-trtr w-25 rounded-1 btn">
                    تایید
                </button>
            </div>
        </form>
    )
}

export default MainPage