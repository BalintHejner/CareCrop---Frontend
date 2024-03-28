import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Protected = (props) => {
    const navigate = useNavigate();
    const { Component  } = props;
    useEffect(() => {
        let login = localStorage.getItem("login");
        if (!login) {
            localStorage.setItem("login", "Jelentkezzen be a folytatáshoz!");
            navigate("/login", {replace: true});
        }
    } ,[])
    return (
        <Component />
    )
}

export default Protected;