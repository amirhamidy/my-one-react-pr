
const ChatForm = () => {

    return (

        <form className="w-100 d-flex justify-content-start align-items-baseline w-right flex-wrap px-3 py-4 mb-2 container cs-bg rounded-1">
            <div className="search-input w-25 px-2 w-right text-light cs-fs-14 text-right">
                <input
                    className="form-control-custom rounded-1"
                    type="text"
                    placeholder="عنوان محصول یا نام کاربر را وارد کنید ..."
                />
            </div>
        </form>
    )
}


export default ChatForm