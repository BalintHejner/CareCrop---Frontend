import "../output.css"

export default function Button({text, click}) {

    return(
        <button onClick={click} style={{marginLeft: "auto", marginRight: "auto"}}  className="justify-center items-center px-16 py-4 mt-5 max-w-full text-3xl font-bold bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] w-[361px] max-md:px-5 max-md:mt-10">
            {text}
        </button>
    )
}