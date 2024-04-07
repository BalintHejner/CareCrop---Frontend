import "../output.css";

export default function Input({id, name, value, pattern, blur, placeholder, change, type }) {
    return (
        <input pattern={pattern} name={name} onChange={change} onBlur={blur} value={value} className="shadow appearance-none border mt-3 rounded w-360 h-input py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={id} type={type} placeholder={placeholder}/>
      );
}