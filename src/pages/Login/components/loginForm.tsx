import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, TextInput } from '../../../components';
import { useAuth } from '../../../contexts';
import { ILogin } from '../../../core';
import { UiRoutes } from '../../../navigation/constant';

export function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        try {
            let model: ILogin = {
                email: email,
                password: password
            };
            login(model);
            navigate(UiRoutes.Home);

        }
        catch (err: any) {
            setErrMsg(err);
        }

    };

    return <Form className="p-3" onSubmit={handleSubmit}>
        <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
            className="form-control"
            onChange={(e: any) => setEmail(e.target.value)}
            required />
        <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
            className="form-control"
            onChange={(e: any) => setPassword(e.target.value)}
            required />

        <div className='text-danger'>{errMsg}</div>

        <div className='d-flex justify-content-center mt-4'>
            <Button className="btn btn-primary" type="submit" >
                <span className='text-white'> Submit now</span>
            </Button>
        </div>

        <div className='mt-4'>Don't have an account? <Link to="/signup">Signup</Link> instead.</div>

    </Form>
}

