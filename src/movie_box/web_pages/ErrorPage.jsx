import { Link } from "react-router-dom"

import searchErrorIcon from "../../assets/svg_icons/ic_search_head_error.svg"

import { ERROR_BUTTON_TEXT, ERROR_SUBJECT_TEXT, ERROR_TITLE_TEXT } from "../utils/data"

const ErrorPage = () => {

    return(

        <section className="container-margin">

            <div className="flex flex-col justify-center items-center gap-1 px-3 ss:px-0">

                <img className="search-error-image"
                    src={searchErrorIcon}
                    alt="search error" />

                <h1 className="title-text mx-2 mt-2">
                    {ERROR_TITLE_TEXT}
                </h1>

                <p className="description-text mx-2 text-center ss:max-w-[600px]">
                    {ERROR_SUBJECT_TEXT}
                </p>

                <button className="primary-button mt-2"
                    onClick={() =>
                        history.go(-1)
                    }>
                    {ERROR_BUTTON_TEXT}
                </button>

            </div>

        </section>
    )
}


export default ErrorPage