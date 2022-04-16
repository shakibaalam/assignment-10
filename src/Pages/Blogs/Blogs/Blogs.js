import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-5 container pt-5'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title my-3">Question no:1</h5>
                            <h5 className="card-title fw-bold my-3">Difference between Authorization vs Authentication</h5>
                            <p className="card-text">The basic difference between Authentication and authorization is that authentication is the process of verifying a user whereas Authorization is the process of verifying specific applications, files, and data of a user has access to.Before the authorization process authentication is done.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title my-3">Question no:2</h5>
                            <h5 className="card-title fw-bold my-3">Why are you using Firebase?What other methods do you have to implement Authentication?</h5>
                            <p className="card-text">I am using firebase for web authentication purpose like google ,email-pass,facebook etc social media login.
                                <br />
                                The list of some common authentication methods used to secure modern systems are-
                                <ol>Password-based authentication. Passwords are the most common methods of authentication. </ol>
                                <ol>Password-based authentication. Passwords are the most common methods of authentication. </ol>
                                <ol>Certificate-based authentication.</ol>
                                <ol>Biometric authentication.</ol>
                                <ol>Token-based authentication.</ol></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title my-3">Question no:3</h5>
                            <h5 className="card-title fw-bold my-3">What other services does firebase provide other than Authentication?</h5>
                            <p className="card-text">The other services that Firebase provides other than Authentication, Most useful of them are-
                                <ol>Cloud Firestore.</ol>
                                <ol>Cloud Functions.</ol>
                                <ol>Hosting</ol>
                                <ol>Cloud Storage.</ol>
                                <ol>Google Analytics.</ol>
                                <ol>Predictions.</ol>
                                <ol>Cloud Messaging.</ol></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;