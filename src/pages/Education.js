import React from "react";

export default function Education() {
    return (
        <section id="education" className="education">
                <h2>Eduacation & Certificates</h2>
                <ul className="education_list">
                    <li>
                        <img src="/public/icons/douglas.svg" alt="Douglas College SVG" className="douglas"/>
                        <div>
                            <p>
                                Computing Science Diploma - HIATUS
                            </p>
                            <p>2022 - present</p>
                            <a target="_blank" href="https://www.douglascollege.ca/program/dpcpsc">
                                Douglas College
                            </a>
                        </div>       
                    </li>
                    <li>
                        <img src="/public/icons/fcc.svg" alt="freecodecamp SVG" className="fcc"/>
                        <div>
                            <p>Responsive Web Design Certification</p>
                            <p>2023</p>
                            <a target="_blank" href="https://www.freecodecamp.org/">freecodecamp</a>
                        </div>      
                    </li>
                    <li >
                        <img src="/public/icons/fcc.svg" alt="freecodecamp SVG" className="fcc"/>
                        <div>
                            <p>JavaScript Algorithms and Data Structures Certification</p>
                            <p>2023</p>
                            <a target="_blank" href="https://www.freecodecamp.org/">freecodecamp</a>
                        </div>  
                    </li>
                    <li >
                        <img src="/public/icons/fcc.svg" alt="freecodecamp SVG" className="fcc"/>
                        <div>
                            <p>Front End Development Libraries Certification</p>
                            <p>2023</p>
                            <a target="_blank" href="https://www.freecodecamp.org/">freecodecamp</a>
                        </div>  
                    </li>
                </ul>
            </section>
    )
}