import React from "react";

export default function Intro() {
    return (
        <>
            <section id="intro" className="intro">
                <div className="intro_main">
                    <h1>Hey, I'm <span className="color-fade">Vakeem Devlin</span></h1>
                </div>
                <img src="./public/images/pixelcoder.gif"></img>
                <div className="intro_sub">
                    <p>An aspiring <span className="color-fade">Frontend Developer</span></p>
                </div>
            </section>
        </>
    )
}