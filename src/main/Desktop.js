import React, {useRef, useEffect, useContext} from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Intro from "../pages/Intro";
import About from "../pages/About";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

import Window from "./Window";

export default function Desktop({apps, setApps, setCurrent, current, setHidden, hidden}) {

    useEffect(() => {
       setApps([["INTRO",<Window setHidden={setHidden} setApps={setApps} setCurrent={setCurrent} id={"INTRO"} content={<Intro/>}/>]])
    },[])

    function handleClick(name,component) {
        setCurrent(name)
        let temp = []
        temp.push(name)
        temp.push(component)
        if (!checkArr(apps, temp)) {
            setApps([...apps, temp])
        }
        setHidden(newArr(hidden, name))
        if (checkArr(hidden, name)) {
            gsap.fromTo(`#${name}`,{y: '60rem'}, {y: '10vh', ease: 'back', duration: 1})
        }
    }
 
    return (
        <ul className="desktop">
            <li onClick={() => handleClick('INTRO',<Window setHidden={setHidden} setApps={setApps} setCurrent={setCurrent} id={"INTRO"} content={<Intro/>}/>)}>
                <img src="./public/app-icons/crown.png"></img>
                <p>INTRO</p>
            </li>
            <li onClick={() => handleClick('ABOUT',<Window setHidden={setHidden} setApps={setApps} setCurrent={setCurrent} id={"ABOUT"} content={<About/>}/>)}>
                <img src="./public/app-icons/users.png"></img>
                <p>ABOUT</p>
            </li>
            <li onClick={() => handleClick('EDUCATION',<Window setHidden={setHidden}  setApps={setApps} setCurrent={setCurrent} id={"EDUCATION"} content={<Education/>}/>)}>
                <img src="./public/app-icons/trophy.png"></img>
                <p>EDUCATION</p>
            </li>
            <li onClick={() => handleClick('SKILLS',<Window setHidden={setHidden} setApps={setApps} setCurrent={setCurrent} id={"SKILLS"} content={<Skills/>}/>)}>
                <img src="./public/app-icons/star.png"></img>
                <p>Skills</p>
            </li>
            <li onClick={() => handleClick('PROJECTS',<Window setHidden={setHidden} setApps={setApps} setCurrent={setCurrent} id={"PROJECTS"} content={<Projects/>}/>)}>
                <img src="./public/app-icons/note.png"></img>
                <p>Projects</p>
            </li>
            <li onClick={() => handleClick('CONTACT',<Window setHidden={setHidden} setApps={setApps} setCurrent={setCurrent} id={"CONTACT"} content={<Contact/>}/>)}>
                <img src="./public/app-icons/send.png"></img>
                <p>Contact</p>
            </li>
        </ul>
    )
}

function checkArr(state, arr) {
    for (let i = 0; i < state.length; i++) {
        if (state[i][0] === arr[0]) {
            return true
        }
    }
}

function newArr(arr, id) {
    let temp = []
    arr.map((item) => {
        if (item !== id) {
            temp.push(item)
        }
    })
    return temp
}