import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-5 container pt-5'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Question no:1</h5>
                            <h5 className="card-title">Difference between Authorization vs Authentication</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Question no:2</h5>
                            <h5 className="card-title">Why are you using Firebase?What other methods do you have to implement Authentication?</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Question no:3</h5>
                            <h5 className="card-title">What other services does firebase provide other than Authentication?</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;