import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, TextInput } from '../../../components';
import { useAuth } from '../../../contexts';
import { privateRoutePathName, UiRoutes } from '../../../navigation/constant';
import { ISignup } from '../../../core/models/signupModel';

export function SignUpForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();


  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        let model: ISignup = {
          name: name,
          email: email,
          password: password
        }
        signup(model);
        navigate(UiRoutes.Login);

      }

      catch (err: any) {
        setErrMsg(err);
      }
    }
    else {
      setErrMsg("Passwords doesn't match!");
    }
  };

  return <Form className="p-3" onSubmit={handleSubmit}>
    <TextInput
      type="text"
      placeholder="Enter name"
      icon="person_outline"
      className="form-control"
      onChange={(e: any) => setName(e.target.value)}
      required />
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
    <TextInput
      type="password"
      placeholder="Confirm password"
      icon="lock"
      className="form-control"
      onChange={(e: any) => setConfirmPassword(e.target.value)}
      required />

    <div className='text-danger'>{errMsg}</div>

    <div className='d-flex justify-content-center mt-4'>
      <Button className="btn btn-primary" type="submit">
        <span className='text-white'> Submit now</span>
      </Button>
    </div>

    <div className='mt-4'> Already have an account? <Link to="/login">Login</Link> instead.</div>

  </Form>
}
