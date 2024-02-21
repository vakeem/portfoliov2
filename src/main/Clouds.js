import React from "react";
import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Clouds() {
    const container = useRef()

    useGSAP(()=> {
        gsap.to('.cloud1', {x:"300vw", repeat:-1, delay: gsap.utils.random(0,20), duration: gsap.utils.random(21,50), ease: "none"})
        gsap.to('.cloud2', {x:"300vw", repeat:-1, delay: gsap.utils.random(0,20), duration: gsap.utils.random(21,100), ease: "none"})
        gsap.to('.cloud3', {x:"300vw", repeat:-1, delay: gsap.utils.random(0,20), duration: gsap.utils.random(21,50), ease: "none"})
        gsap.to('.cloud4', {x:"300vw", repeat:-1, delay: gsap.utils.random(0,20), duration: gsap.utils.random(21,100), ease: "none"})
        gsap.to('.cloud5', {x:"300vw", repeat:-1, delay: gsap.utils.random(0,20), duration: gsap.utils.random(21,50), ease: "none"})
        gsap.to('.cloud6', {x:"300vw", repeat:-1, delay: gsap.utils.random(0,20), duration: gsap.utils.random(21,100), ease: "none"})
        gsap.to('.cloud7', {x:"300vw", repeat:-1, delay: gsap.utils.random(0,20), duration: gsap.utils.random(21,50), ease: "none"})
        gsap.to('.cloud8', {x:"300vw", repeat:-1, delay: gsap.utils.random(0,20), duration: gsap.utils.random(21,100), ease: "none"})
        gsap.to('.cloud9', {x:"300vw", repeat:-1, delay: gsap.utils.random(0,20), duration: gsap.utils.random(21,50), ease: "none"})
    },{scope: container})

    return (
        <div className="weather" ref={container}>
            <img className="weather_cloud cloud1" src="./public/clouds/cloud1.png"></img>
            <img className="weather_cloud cloud2" src="./public/clouds/cloud2.png"></img>
            <img className="weather_cloud cloud3" src="./public/clouds/cloud3.png"></img>
            <img className="weather_cloud cloud4" src="./public/clouds/cloud4.png"></img>
            <img className="weather_cloud cloud5" src="./public/clouds/cloud5.png"></img>
            <img className="weather_cloud cloud6" src="./public/clouds/cloud6.png"></img>
            <img className="weather_cloud cloud7" src="./public/clouds/cloud7.png"></img>
            <img className="weather_cloud cloud8" src="./public/clouds/cloud8.png"></img>
            <img className="weather_cloud cloud9" src="./public/clouds/cloud9.png"></img>
        </div>
    )
}