import "./Footer.css";

function Footer({setPage}) {
    return(
        <div className="app-footer">
            <p>Chinese Food, Inc</p>
            <p>Please see our <button aria-label="open privacy policy" className="footer-button" onClick={()=>setPage("Privacy")}>Privacy Policy</button></p>
        </div>
    )
}

export default Footer;