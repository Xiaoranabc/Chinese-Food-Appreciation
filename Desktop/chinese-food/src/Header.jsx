import "./Header.css";
import GlobalNav from "./GlobalNav";
import Modal from "./Modal";

function Header({setPage}) {
  
    return(
        <div className="app-header">
            <a className="skip-link" href="#main-content" aria-label="skip to main content">Skip to content</a>
            <div className="header-img-title">
                <button aria-label="open main homepage" className="header-img-button" onClick={()=> setPage("MainHome")}>
                <img className="header-img" src="/logo-noodle.jpg" alt="fried noodle with vegetables"/>
                </button>
                <h1 className="header-title">Chinese Food</h1>
                <Modal/>
            </div>
            
            <GlobalNav setPage={setPage}/>
        </div>
    )
}

export default Header;