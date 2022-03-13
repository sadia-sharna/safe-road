import React from 'react';
import { SignUpForm } from '.';

export function SignUp() {

    return <>
        <div className="card position-absolute top-50 start-50 translate-middle">
            <div className="card-body p-5">
                <h5 className='text-center text-uppercase'>Create an account</h5>
                <SignUpForm />
            </div>
        </div>
    </>;
}
