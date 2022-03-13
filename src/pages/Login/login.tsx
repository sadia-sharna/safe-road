import React from 'react';
import { LoginForm } from '.';

export function Login() {
    return <>
        <div className="card position-absolute top-50 start-50 translate-middle">
            <div className="card-body p-5">
                <h5 className='text-center text-uppercase'>Login</h5>
                <LoginForm />
            </div>
        </div>
    </>;
}
