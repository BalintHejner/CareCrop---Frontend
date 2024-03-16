import "../output.css"
import { useNavigate } from "react-router-dom"

export default function Button({text, path}) {
    const navigate = useNavigate();
    return(
        <button onclick={() => navigate(path)} className="justify-center items-center px-16 py-4 mt-20 max-w-full text-3xl font-bold bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] w-[361px] max-md:px-5 max-md:mt-10">
            {text}
        </button>
    )
}