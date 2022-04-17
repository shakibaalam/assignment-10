import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='container w-50 mx-auto mt-5 pt-4'>
            <h1 className='text-center my-5 login-color'>SignIn...</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className='text-center'>
                    <Button className='w-50 btn fw-bold fs-5 btn-style px-4 my-2' variant="primary" type="submit">
                        SignIn <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle>
                    </Button>
                </div>
                <p>Are you new here?<Link to='/register'>Sign up</Link></p>
            </Form>
            <div>
                <div className="d-flex align-items-center">
                    <div style={{ height: '1px' }} className='w-50 or-color'></div>
                    <p className='mt-2 px-2'>or</p>
                    <div style={{ height: '1px' }} className='w-50 or-color'></div>
                </div>
            </div>
            <div className='text-center'>
                <button className='text-white w-50 btn fw-bold fs-5 btn-style px-4 my-2'><FcGoogle></FcGoogle> Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;