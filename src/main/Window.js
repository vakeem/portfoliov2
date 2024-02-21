import React, {useEffect, useRef} from "react";

import { CurrentContext, AppsContext, HiddenContext } from "../App";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Window({content, id, setCurrent, setApps, setHidden}) {

    const window = useRef()

    const value = React.useContext(CurrentContext)
    const apps = React.useContext(AppsContext)
    const hidden = React.useContext(HiddenContext)

    function handleMini() {
        gsap.to(`#${id}`, {y: '60rem', ease: 'power3.in', duration: .2, onComplete() {setHidden([...hidden, id])}})
    }

    function handleClose() {
        let temp = []
        apps.map((item) => {
            if (item[0] !== id) {
                temp.push(item)
            }
        })
        setApps(temp)
    }

    useGSAP(() => {
        gsap.fromTo(`#${id}`,{y: '60rem'}, {y: '10vh', ease: 'back', duration: 1})
    })
    
    return (
        <div className={`window${value === id ? ' current' : ''}${hidden.includes(id) ? ' hidden' : ''}`} ref={window} id={id} onClick={() => setCurrent(id)}>
            <div className="window_nav">
                <h3>{id}</h3>
                <div className="window_nav_btn">
                    <button className="mini" onClick={handleMini}>-</button>
                    <button className="close" onClick={handleClose}>X</button>
                </div>
            </div>
            <div className="window_page">
                {content}
            </div>
        </div>

    )
}