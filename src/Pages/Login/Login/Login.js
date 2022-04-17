import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passRef = useRef('');

    //for requireauth
    const from = location.state?.from?.pathname || "/";
    if (user || Guser) {
        navigate(from, { replace: true });
    }
    const handleSignIn = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        signInWithEmailAndPassword(email, pass);
        navigate('/')
    }
    return (
        <div className='container w-50 mx-auto mt-5 pt-4'>
            <h1 className='text-center my-5 login-color'>SignIn...</h1>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                <div className='text-center'>
                    <Button className='w-50 btn fw-bold fs-5 btn-style px-4 my-2' variant="primary" type="submit">
                        SignIn
                    </Button>
                </div>
                <p>Are you new here? <Link to='/register'>Sign up</Link></p>
            </Form>
            <div>
                <div className="d-flex align-items-center">
                    <div style={{ height: '1px' }} className='w-50 or-color'></div>
                    <p className='mt-2 px-2'>or</p>
                    <div style={{ height: '1px' }} className='w-50 or-color'></div>
                </div>
            </div>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='text-white w-50 btn fw-bold fs-5 btn-style px-4 my-2'><FcGoogle></FcGoogle> Google SignUp</button>
            </div>
        </div>
    );
};

export default Login;