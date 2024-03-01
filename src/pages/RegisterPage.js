import * as React from 'react';
import '../output.css'
import Header from '../components/Header';

function RegisterForm() {
    return (
        <>
            <div className="mt-36 text-5xl font-bold max-md:mt-10 max-md:text-4xl">Regisztráció</div>
        </>
    )
}


function RegisterPage() {
    return (
        <div className="flex flex-col items-center pb-12 h-max text-black whitespace-nowrap bg-body leading-[100%]">
        <Header />
        <RegisterForm />
        </div>

    )
}

export default RegisterPage