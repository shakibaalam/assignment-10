import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useUpdateProfile } from 'react-firebase-hooks/auth';

const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const [error1, setError1] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, udateError] = useUpdateProfile(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const confirmRef = useRef('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const confirm = confirmRef.current.value;
        if (pass === confirm) {
            await createUserWithEmailAndPassword(email, pass)
            await updateProfile({ name });
            alert('Updated profile');
            navigate('/');
            console.log(email, pass, name);
        }
        else {
            return setError1('password didnt match')
        }
    }

    return (
        <div className='container w-50 mx-auto mt-5 pt-4'>
            <h1 className='text-center my-5 login-color'>SignUp...</h1>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={confirmRef} type="password" placeholder="Confirm Password" />
                </Form.Group>
                <p className='text-danger'>{error1 ? error1 : ''}</p>
                <p className='text-danger'>{error ? error.message : ''}</p>

                {
                    loading && <div class="d-flex justify-content-center">
                        <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

                }
                <Form.Group className={`mb-3 ${agree ? '' : 'text-danger'}`} onClick={() => setAgree(!agree)} controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept terms & conditions" />
                </Form.Group>
                <div className='text-center'>
                    <Button disabled={!agree} className='w-50 btn fw-bold fs-5 btn-style px-4 my-2' variant="primary" type="submit">
                        SignUp
                    </Button>
                </div>

                <p className='text-center'>Already have an account? <Link to='/login'>SignIn</Link></p>
            </Form>

        </div>
    );
};

export default Register;