import React from "react";
import myImage from "../images/me.jpg"
import email from "../images/email.png"
import linkedln from "../images/linkedln.png"



export default function Header() {
    return (
        <div className="header">
        <img src={myImage} alt="Its me" className="image"/>
        <h1 className="name">Aleksei Kudriavtcev</h1>
        <p className="occupation">Frontend Developer</p>
        <a href="https://github.com/ackudryavcev" className="my-link">github.com/ackudryavcev</a>
        <div className="button-block">
            <a href = "mailto:ackudryavcev@gmail.com?subject = Feedback&body = Message">  <button className="button button-email"><img src={email} alt="email" /> Email</button></a>
            <a href="https://www.linkedin.com/in/ackudryavcev/">  <button className="button button-linkedln"><img src={linkedln} alt="linkedln" /> LinkedLn</button></a>
        </div>
        </div>
    )
}