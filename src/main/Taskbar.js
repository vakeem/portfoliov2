import React, { useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Taskbar({apps, setCurrent, current, hidden, setHidden}) {
    useEffect(()=> {
        startTime()
    })

    function handleOpen(id) {
        setCurrent(id)
        setHidden(newArr(hidden, id))
        if (checkArr(hidden, id)) {
            gsap.fromTo(`#${id}`,{y: '60rem'}, {y: '10vh', ease: 'back', duration: 1, onComplete() {console.log(id)}})
        }
    }

    return (
        <div className="taskbar">
            <div className="taskbar_home">
                <p className="big">Vakeem Devlin</p>
                <p className="small">Vakeem</p>
            </div>
            <div className="taskbar_apps">
                {apps.map((item) => {
                    return (
                        item[0] === "INTRO"
                        ?
                        <img key={item} draggable={false} className={`app-icon ${current === "INTRO" && !hidden.includes('INTRO') ? 'active' : ''}`} src="./public/app-icons/crown.png" onClick={() => handleOpen(item[0])}></img>
                        :
                        item[0] === "ABOUT"
                        ?
                        <img key={item} draggable={false} className={`app-icon ${current === "ABOUT" && !hidden.includes('ABOUT') ? 'active' : ''}`} src="./public/app-icons/users.png" onClick={() => handleOpen(item[0])}></img>
                        :
                        item[0] === "EDUCATION"
                        ?
                        <img key={item} draggable={false} className={`app-icon ${current === "EDUCATION" && !hidden.includes('EDUCATION') ? 'active' : ''}`} src="./public/app-icons/trophy.png" onClick={() => handleOpen(item[0])}></img>
                        :
                        item[0] === "SKILLS"
                        ?
                        <img key={item} draggable={false} className={`app-icon ${current === "SKILLS" && !hidden.includes('SKILLS') ? 'active' : ''}`} src="./public/app-icons/star.png" onClick={() => handleOpen(item[0])}></img>
                        :
                        item[0] === "PROJECTS"
                        ?
                        <img key={item} draggable={false} className={`app-icon ${current === "PROJECTS" && !hidden.includes('PROJECTS') ? 'active' : ''}`} src="./public/app-icons/note.png" onClick={() => handleOpen(item[0])}></img>
                        :
                        <img key={item} draggable={false} className={`app-icon ${current === "CONTACT" && !hidden.includes('CONTACT') ? 'active' : ''}`} src="./public/app-icons/send.png" onClick={() => handleOpen(item[0])}></img>
                    )
                })}
            </div>
            <div className="taskbar_time">
                <p id="clock"></p>
            </div>
        </div>
    ) 
}


function startTime() {
    const today = new Date();                    
    let h = today.getHours();
    let AmOrPm = h >= 12 ? 'pm' : 'am';
    h = (h % 12) || 12;
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('clock').innerHTML =  h + ":" + m + " " + AmOrPm;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
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

function checkArr(arr, name) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === name) {
            return true
        }
    }
}
