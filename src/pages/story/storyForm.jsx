


const StoryForm = () => {
    return (
        <form className="w-100 d-flex justify-content-around align-items-baseline text-center flex-wrap px-3 py-4 mb-2 container cs-bg rounded-1">
            <div className="px-2 w-right text-light cs-fs-14 text-right w-25">
                <input
                    className="form-control-custom rounded-1"
                    type="text"
                    placeholder=" جستجو ی استوری.... "
                />
            </div>
            <div className="px-2 my-2 w-right text-light cs-fs-14 d-flex justify-content-around text-right w-75"></div>
        </form>
    )
}

export default StoryForm