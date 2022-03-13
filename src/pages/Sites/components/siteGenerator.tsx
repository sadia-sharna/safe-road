import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Form, TextInput } from '../../../components';
import { useAuth } from '../../../contexts';

export function SiteGenerator() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        try {
            // let model: ILogin = {
            //     email: email,
            //     password: password
            // };
            // login(model) ? navigate(UiRoutes.Home) : console.log(model);

        }
        catch (err) {
            console.log(err);

        }

    };

    return <Form className="p-3" onSubmit={handleSubmit}>
        <label>Site id: 1</label>
        <TextInput
            type="text"
            placeholder="Name"
            icon="name"
            className="form-control"
            onChange={(e: any) => setEmail(e.target.value)} />

        <TextInput
            type="text"
            placeholder="Jurisdiction/City/Region"
            icon="name"
            className="form-control"
            onChange={(e: any) => setEmail(e.target.value)} />

        <TextInput
            type="text"
            placeholder="Site Description"
            icon="name"
            className="form-control"
            onChange={(e: any) => setEmail(e.target.value)} />

        <div className='d-flex justify-content-center mt-4'>
            <Button className="btn btn-primary" type="submit" >
                <span className='text-white'> Submit now</span>
            </Button>
        </div>


    </Form>
}
