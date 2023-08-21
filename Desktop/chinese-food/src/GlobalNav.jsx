import React from "react";
import { useState } from "react";
import "./GlobalNav.css";

function GlobalNav({setPage}) {
    const [isShow, setIsShow] = useState(false);

    return (
        <nav className="header-nav">
            <ul className="header-nav-menubar">
                <li>
                    <button aria-label="open main homepage" className="header-nav-button" onClick={()=> setPage("MainHome")}>Home Page</button>
                </li>
                <li>
                    <button aria-label="open cuisine page" className="header-nav-button" onClick={()=> setPage("MainCuisine")}>Cuisine</button>
                </li>
                <li>
                    <button aria-label="open recipe page" className="header-nav-button" onClick={()=> setPage("MainRecipe")}>Recipe</button>
                </li>
                <li>
                    <button aria-label="open submenu traditional festival" onClick={()=> setIsShow(!isShow)} className="header-nav-sub-button">Traditional Festival</button>
                        {isShow &&<ul className="header-nav-submenu">
                            <li>
                                <button aria-label="open mid-autumn page" className="header-nav-button" onClick={()=> {setPage("MainMidAutumn");setIsShow(!isShow);}}>Mid-Autumn-Festival</button>
                            </li>
                            <li>
                                <button aria-label="open dragon boat page" className="header-nav-button" onClick={()=> {setPage("MainDragonBoat");setIsShow(!isShow);}}>Dragon Boat Festival</button>
                            </li>
                            <li>
                                <button aria-label="open lantern page" className="header-nav-button" onClick={()=> {setPage("MainLantern");setIsShow(!isShow);}}>Lantern Festival</button>
                            </li>
                        </ul>}
                </li>
            </ul>
        </nav>
    )
}

export default GlobalNav;