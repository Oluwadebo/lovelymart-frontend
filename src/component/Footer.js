import React from 'react'
import footballboots from "./asset/football_boots_198704.jpg"

const Footer = () => {
    let d = new Date();
    let year = d.getFullYear();
    return (
        <>
            <div className="footer">
                <section className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 footer-image">
                                <div className="mb-3 mb-md-none">
                                    <h1 className="d-inline-flex align-items-center mb-2 text-decoration-none"><span className="fs-5" style={{ cursor: "pointer;" }}>Anthonymart</span></h1>
                                    <ul className="list-unstyled small">
                                        <li className="mb-2 text-light">Designed and built with all the love in the world by the <i>Anthonymart team</i> with the help of <b>God.</b>.</li>
                                    </ul>
                                </div>
                                <h1>Download App <img src={footballboots} alt="" /></h1>
                            </div>
                            <div className="col-4 col-md-3">
                                <h1>Useful Links</h1>
                                <p>Privacy Policy</p>
                                <p>Term of Use</p>
                                <p>Return Policy</p>
                                <p>Discount Coupons</p>
                            </div>
                            <div className="col-4 col-md-3">
                                <h1>Companys</h1>
                                <p>About Us</p>
                                <p>Contact Us</p>
                                <p>Career</p>
                                <p>Affiliate</p>
                            </div>
                            <div className="col-4 col-md-2">
                                <h1>Follow Us On</h1>
                                <p><i className="fa fa-facebook"></i>Facebook</p>
                                <p><i className="fa fa-youtube"></i>Youtube</p>
                                <p><i className="fa fa-linkedin"></i>Linkedin</p>
                                <p><i className="fa fa-twitter"></i>Twitter</p>
                                <p><i className="fa fa-what's-app"></i><a href="wa.me/+23409044796430" className='text-white'>What's app </a></p>
                            </div>
                        </div>
                        <hr />
                        <p className="copyright text-center"> © {year} developed <i className="fa fa-heart"></i> by OGUNWE DEBO</p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer