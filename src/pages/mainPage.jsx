


const MainPage = () => {
    return (


        <div className="w-100 d-flex justify-content-center align-items-center text-center flex-wrap px-3 py-3 mt-5 container cs-bg rounded-1">
            <div className="px-2 my-2 w-right text-right w-50">
                نام ادمین
                <input className="form-control my-2 rounded-1" type="text" placeholder="" />
            </div>
            <div className="px-2 my-2 w-right text-right w-50">
                نام خانوادگی ادمین
                <input className="form-control my-2 rounded-1" type="text" placeholder="" />
            </div>
            <div className="px-2 my-2 w-right text-right w-50">
                ایمیل ادمین ((( غیر قابل تغییر )))
                <input className="form-control my-2 rounded-1" type="email" placeholder="" />
            </div>
            <div className="px-2 my-2 w-right text-right w-50">
                شماره تلفن ادمین
                <input className="form-control my-2 rounded-1" type="text" placeholder="" />
            </div>
        </div>
    )
}

export default MainPage