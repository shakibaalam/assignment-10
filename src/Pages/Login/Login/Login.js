import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    const handleSignIn = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        signInWithEmailAndPassword(email, pass);
    }
    //for requireauth
    const from = location.state?.from?.pathname || "/";
    if (user || Guser) {
        navigate(from, { replace: true });
    }
    //for reset pass
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(auth);
    const handleReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Enter your email first');
        }

    }
    return (
        <div className='container w-50 mx-auto mt-5 pt-4'>
            <h1 className='text-center my-5 login-color'>SignIn...</h1>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>

                <p>Forget Password?<button onClick={handleReset} className='btn btn-link'>Reset Password</button> </p>

                <p className='text-danger'>{error ? error.message : '' || Gerror ? Gerror.message : ''}</p>

                {
                    loading && <div class="d-flex justify-content-center">
                        <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    ||
                    Gloading && <div class="d-flex justify-content-center">
                        <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

                }
                <div className='text-center'>
                    <Button className='w-50 btn fw-bold fs-5 btn-style px-4 my-2' variant="primary" type="submit">
                        SignIn
                    </Button>
                </div>

                <p className='text-center'>Are you new here? <Link to='/register'>Sign up</Link></p>

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
            <ToastContainer />
        </div>
    );
};

export default Login;