import { useState } from "react";
import "./MainHome.css";

function MainHome() {

    const images =[ 
        {title: "zongzi", path: "/carousel-zongzi.jpg", alt: "zongzi with green leaves and red dates"},
        {title: "ricenoodle", path: "/carousel-dumpling.jpg", alt: "rice noodle soup with vegetables"},
        {title: "shrimp", path: "/carousel-shrimp.jpg", alt: "shrimp with yellow soup in a large plate"},
    ];

    const [index, setIndex] = useState(0);

    const handlePre = ()=>{
        if(index===0) {setIndex(2);}
        else {setIndex(index-1);}
    }

    const handlePost = ()=>{
        if(index===2) {setIndex(0);}
        else {setIndex(index+1);}
    }

    return (
        <div className="main-homepage" id="#main-content">
            <div className="main-carousel">
                <img className="main-carousel-img" src={images[index].path} alt={images[index].alt} key={images[index].title}/>
            </div>
            <button aria-label="change to next image" className="left-arrow" onClick={handlePre}></button>
            <button aria-label="change to previous image" className="right-arrow" onClick={handlePost}></button>   
        </div>
    )
}

export default MainHome;