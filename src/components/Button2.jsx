import * as React from 'react';
import '../output.css';
import { useNavigate } from "react-router-dom";


export default function Button2({ text, className, click }) {

  const navigate = useNavigate()
  const path = () => {
    navigate(click)
  }

  return (
    <main className="flex flex-col items-center justify-center">
       <button className={className} onClick={path}>
          {text}
       </button>
    </main>
  );
}

