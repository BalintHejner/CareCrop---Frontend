import "../output.css";

export default function Input({id, value, pattern, blur, placeholder, data, type }) {
    return (
        <input pattern={pattern} onChange={data} onBlur={blur} value={value} className="shadow appearance-none border mt-3 rounded w-360 h-input py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={id} type={type} placeholder={placeholder}/>
      );
}