import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
        <section className="footer-subsc">
            <p className="footer-subs-heading">
               Join the Adventure newsletter to recieve our best vacation deals
            </p>
            <p className="footer-subsc-text">
                You can unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                    <button buttonstyle='btn--outline'>Subscribe</button>
                </form>

            </div>
            </section> 
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-item">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works </Link>
                        <Link to='/'> Testimonial</Link>
                        <Link to='/'> Careers</Link>
                        <Link to='/'> Investors</Link>
                        <Link to='/'>Terms of Services</Link>

                    </div>
                    <div className="footer-link-item">
                        <h2>Contact Us</h2>
                        <Link to='/'> Testimonial</Link>
                        <Link to='/'> Careers</Link>
                        <Link to='/'> Investors</Link>
                        <Link to='/'>Terms of Services</Link>

                    </div>
                </div>
                <div className="footer-link-wrapper">
                   
                    <div className="footer-link-item">
                        <h2>Social Media</h2>
                        <Link to='/'> Instagram</Link>
                        <Link to='/'> Facebook</Link>
                        <Link to='/'> Facebook</Link>
                        <Link to='/'> Facebook</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className='social-logo'>
                            TRVL<i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL @ 2021</small>
                    <div className="social-icons">
                        <Link className='social-icon-link fb'
                        to='/'
                        target='_blank'
                        arria-label='Facebook'>
                        <i className="fab fa-facebook-f"></i></Link>
                        <Link className='social-icon-link ig'
                        to='/'
                        target='_blank'
                        arria-label='Instagram'>
                        <i className="fab fa-instagram"></i></Link>
                    </div>
                </div>
                </section>           
        </div>
    )
}

export default Footer 
