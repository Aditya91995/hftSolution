import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Login from './Login'
import './DashboardStyle.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function Dashboard() {
    const Namees = useStyles();
    const ViewItems = () => {
        alert("hello")
    }
    return (
        <div>
            
            {/* Main */}
            <main>

                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">About us</h1>
                            <p className="lead text-muted">In next 5 years, our goal is to impact 1 million of the 440 million children in India, by enhancing and enriching the quality of education, with special focus on rural region.</p>
                            <p>
                                
                                <a href="#" className="btn btn-success  my-2">Click here for Selling your book</a>
                            </p>
                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {/* 1st */}
                            <div className="col">
                                <div className="card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                    <div className="card-body">
                                        <p className="card-text">Looking for something meaningful, hands-on, and creative endeavor for your child during the lockdown?</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Wishlist</button>
                                            </div>
                                            <span class="badge bg-success">₹ 99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                    <div className="card-body">
                                        <p className="card-text">Looking for something meaningful, hands-on, and creative endeavor for your child during the lockdown?</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Wishlist</button>
                                            </div>
                                            <span class="badge bg-success">₹ 99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                    <div className="card-body">
                                        <p className="card-text">Looking for something meaningful, hands-on, and creative endeavor for your child during the lockdown?</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Wishlist</button>
                                            </div>
                                            <span class="badge bg-success">₹ 99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                    <div className="card-body">
                                        <p className="card-text">Looking for something meaningful, hands-on, and creative endeavor for your child during the lockdown?</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Wishlist</button>
                                            </div>
                                            <span class="badge bg-success">₹ 99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                    <div className="card-body">
                                        <p className="card-text">Looking for something meaningful, hands-on, and creative endeavor for your child during the lockdown?</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Wishlist</button>
                                            </div>
                                            <span class="badge bg-success">₹ 99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                    <div className="card-body">
                                        <p className="card-text">Looking for something meaningful, hands-on, and creative endeavor for your child during the lockdown?</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Wishlist</button>
                                            </div>
                                            <span class="badge bg-success">₹ 99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                    <div className="card-body">
                                        <p className="card-text">Looking for something meaningful, hands-on, and creative endeavor for your child during the lockdown?</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Wishlist</button>
                                            </div>
                                            <span class="badge bg-success">₹ 99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                    <div className="card-body">
                                        <p className="card-text">Looking for something meaningful, hands-on, and creative endeavor for your child during the lockdown?</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Wishlist</button>
                                            </div>
                                            <span class="badge bg-success">₹ 99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                    <div className="card-body">
                                        <p className="card-text">Looking for something meaningful, hands-on, and creative endeavor for your child during the lockdown?</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Wishlist</button>
                                            </div>
                                            <span class="badge bg-success">₹ 99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

