import React from "react";
import twitter from "../images/Twitter Icon.png"
import facebook from "../images/Facebook Icon.png"
import instagram from "../images/Instagram Icon.png"
import github from "../images/GitHub Icon.png"

export default function Footer() {
    return (
        <div className="footer-block">
        <div className="footer">
            <a href="https://twitter.com/ackudryavcev" className="footer-link"><img src={twitter} alt="twitter" className="footer-image" /></a>
            <a href="https://www.facebook.com/alexey.kudryavtsyev" className="footer-link"><img src={facebook} alt="facebook" className="footer-image" /></a>
            <a href="https://www.instagram.com/ackudryavcev/" className="footer-link"><img src={instagram} alt="instagram" className="footer-image" /></a>
            <a href="https://github.com/ackudryavcev" className="footer-link"><img src={github} alt="github" className="footer-image" /></a>
        </div>
        </div>
    )
}