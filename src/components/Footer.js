import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="fw-bold">About Us</h5>
                        <p>This Website is Developed By <b>Sankalp Gupta</b></p>
                        <p>Learn More About FoodWeb and Our Mission to Provide Delicious Food Items.</p>
                    </div>
                    <div className="col-md-4">
                        <h5 className="fw-bold">Follow Us</h5>
                        <br/>
                        <ul className="list-inline social-icons">
                            <li className="list-inline-item"><a href="https://github.com/sankalp130" className="text-white btn btn-floating rounded-circle m-1" target="_blank" style={{ backgroundColor: '#333333' }} role="button"><i className="fab fa-github"></i></a></li>
                            <li className="list-inline-item"><a href="mailto:gsankalp587@gmail.com" className="text-white btn btn-floating rounded-circle m-1" target="_blank" style={{ backgroundColor: '#dd4b39' }} role="button"><i className="fas fa-envelope"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="fw-bold">Contact Info</h5>
                        <p>123, Jalalpur Greater Noida</p>
                        <p>Email: info@foodweb.com</p>
                        <p>Phone: +91-123-456-7890</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; 2024 <b>FoodWeb</b>, Inc. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-end">
                        <ul className="list-inline">
                            <li className="list-inline-item"><Link to="https://policies.google.com/privacy" target="_blank" className="text-white text-decoration-none fw-bold">Privacy Policy |</Link></li>
                            <li className="list-inline-item"><Link to="https://policies.google.com/terms" target="_blank" className="text-white text-decoration-none fw-bold">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
