import React from "react";

export default function Skills() {
    return (
        <section id="skills" className="skills">
                <h2 >Skills</h2>
                <div className="skills_lang">
                    <h3>Languages</h3>
                    <ul >
                        <li>
                            <img src="./public/icons/python.svg" alt="Python SVG"/>
                            <p>Python</p>
                        </li>
                        <li>
                            <img src="./public/icons/html.svg" alt="HTML SVG"/>
                            <p>HTML</p>
                        </li>
                        <li>
                            <img src="./public/icons/css.svg" alt="CSS SVG"/>
                            <p>CSS</p>
                        </li>
                        <li>
                            <img src="./public/icons/js.svg" alt="Javascript SVG"/>
                            <p>Javascript</p>
                        </li>
                        <li>
                            <img src="./public/icons/sass.svg" alt="Sass SVG"/>
                            <p>Sass</p>
                        </li>
                    </ul>
                </div>

                <div className="skills_other">
                    <h3>Frameworks & Libraries</h3>
                    <ul>
                        <li>
                            <img src="./public/icons/react.svg" alt="React SVG"/>
                            <p>ReactJs</p>
                        </li>
                        <li>
                            <img src="./public/icons/git.svg" alt="Git SVG"/>
                            <p>Git</p>
                        </li>
                        <li>
                            <img src="./public/icons/tailwindcss.svg" alt="tailwindcss SVG"/>
                            <p>tailwindcss</p>
                        </li>
                        <li>
                            <img src="./public/icons/gsap.svg" alt="GSAP SVG"/>
                            <p>GSAP</p>
                        </li>
                        <li>
                            <img src="./public/icons/threejs.svg" alt="Three.js SVG"/>
                            <p>Three.js</p>
                        </li>
                        <li>
                            <img src="./public/icons/webpack.svg" alt="Webpack SVG"/>
                            <p>Webpack</p>
                        </li>
                        <li>
                            <img src="./public/icons/npm.svg" alt="npm SVG"/>
                            <p>npm</p>
                        </li>
                    </ul>
                </div>
        </section>
    )
}