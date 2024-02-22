import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="contact">
                <div className="contact_main">
                    <h2 >Contact Me</h2>
                    <address>Vancouver, Canada</address>
                    <a className="email" href = "mailto: vakeem18@gmail.com">vakeem18@gmail.com</a>
                    <a className="resume" href="./public/download/resume.pdf" target="_blank">VIEW RESUME</a>
                </div>
                <div className="contact_sub">
                    <h2>Find me on</h2>
                    <ul>
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/vakeem-d-5a94682b1/">
                                <img src="../public/icons/linkedin.svg" alt="Linkedin SVG"/>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/vakeem">
                                <img src="../public/icons/github.svg" alt="Github SVG"/>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://stackoverflow.com/users/23317477/vdev">
                                <img src="../public/icons/stackoverflow.svg" alt="stackoverflow SVG"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
    )
}