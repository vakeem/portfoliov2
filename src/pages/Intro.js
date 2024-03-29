import React from "react";

export default function Intro() {
    return (
        <>
            <section id="intro" className="intro">
                <div className="intro_main">
                    <h1>Hey, I'm <span className="color-fade">Vakeem Devlin</span></h1>
                </div>
                <img src="/public/images/pixelcoder.gif"></img>
                <div className="intro_sub">
                    <p>An aspiring <span className="color-fade">Frontend Developer</span></p>
                </div>
                <div className="intro_bot">
                    <p>Welcome to my portfolio site! In the apps on this psuedo desktop, you can get to know about my background, skills, projects and all that jazz.</p>
                    <p>I also have a more generic and boring version at this <a target="_blank" href="https://vakeemdevlin2.onrender.com/">link</a>.</p>
                </div>
            </section>
        </>
    )
}