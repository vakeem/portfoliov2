import React, { useContext, createContext } from "react";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";

import Taskbar from "./Taskbar";
import Clouds from "./Clouds";
import Desktop from "./Desktop";

export const CurrentContext = createContext();
export const AppsContext = createContext();
export const HiddenContext = createContext();

gsap.registerPlugin(Draggable) 

function App () {
    const [apps, setApps] = useState([])
    const [current, setCurrent] = useState('')
    const [hidden, setHidden] = useState([])

    useGSAP(()=>{
        Draggable.create(`.window`, {
            type: "x,y",
            bounds: "#app"
        });
    },[apps])

    return (
        <>
            <Desktop current={current} setCurrent={setCurrent} apps={apps} setApps={setApps} setHidden={setHidden} hidden={hidden}></Desktop>
            <Clouds></Clouds>
            {apps.map((item) => {
                return (
                    <CurrentContext.Provider value={current}>
                    <HiddenContext.Provider value={hidden}>
                    <AppsContext.Provider value={apps}>
                    {item[1]}
                    </AppsContext.Provider>
                    </HiddenContext.Provider>
                    </CurrentContext.Provider>
                )
            })}
            <Taskbar current={current} setCurrent={setCurrent} apps={apps} hidden={hidden} setHidden={setHidden}></Taskbar>
        </>
    )
}

export default App;