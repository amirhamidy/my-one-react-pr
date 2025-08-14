
const Security = () => {
    return (

        <>
            <form className="w-100 d-flex justify-content-start align-items-center text-center flex-wrap px-3 py-3 mt-5 container cs-bg rounded-1">
                <div className="my-2 w-right text-light text-right cs-fs-14 d-flex flex-column w-100">
                    رمز فعلی
                    <input className="form-control-custom my-2 w-50 rounded-1" type="text" placeholder="" />
                </div>
                <div className="px-2 my-2 w-right  text-light cs-fs-14  text-right w-50">
                    رمز جدید
                    <input className="form-control-custom my-2 rounded-1" type="text" placeholder="" />
                </div>
                <div className="px-2 my-2 w-right  text-light cs-fs-14  text-right w-50">
                    تکرار رمز جدید
                    <input className="form-control-custom my-2 rounded-1" type="email" placeholder="" />
                </div>
                <div className="px-2 w-100 w-right ">
                    <button className="px-2 py-1 text-light cs-fs-14 bg-trtr w-25 rounded-1 btn">
                        تایید
                    </button>
                </div>

            </form>
            <div className="col-md-10 align-items-start mt-2 px-2">
                <header className="d-flex flex-column justify-content-start align-items-start">
                    <h6 className="px-1 mt-3 ">الزامات رمز عبور</h6>
                    <span className="px-1 my-2 cs-fs-14">1 . حداقل 8 کاراکتر را برای رمز عبور خود استفاده نمایید</span>
                    <span className="px-1 my-2 cs-fs-14">2 . رمز عبور شما باید یک نویسه کوچیک داشته باشد</span>
                    <span className="px-1 my-2 cs-fs-14">3 . رمز عبور شما باید یک نویسه بزرگ داشته باشد</span>
                    <span className="px-1 my-2 cs-fs-14">4 . رمز عبور شما باید حداقل یک نماد , یک عدد یا یک نویسه خالی داشته باشد</span>
                </header>
            </div>

        </>

    )



}

export default Security