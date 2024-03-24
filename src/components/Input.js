import "../output.css";

export default function Input({value, placeholder, data, type }) {
    return (
        <input onChange={data} value={value} className="shadow appearance-none border mt-3 rounded w-360 h-input py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type={type} placeholder={placeholder}/>
      );
}