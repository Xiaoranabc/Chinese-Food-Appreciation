import { useRef } from "react";
import { useState } from "react";
import { useId } from "react";
import "./Modal.css";

function Modal() {
    const dialogRef = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [regUsername, setRegUsername] = useState("");
    const [regPassword, setRegPassword] = useState("")
    const [signIn, setSignIn] = useState(`Hello, sign in ${username}!`);
    const [showSignIn, setShowSignIn] = useState(true);
    const [showRegister, setShowRegister] = useState(false);
    const [showSocialMedia, setShowSocialMedia] = useState(false);
    const [showWebsite, setShowWebsite] = useState(false);
    const [permenantAddress, setPermenantAddress] = useState("");
    const [currentAddress, setCurrentAddress] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [regUsernameError, setRegUsernameError] = useState("");
    const [regPasswordError, setRegPasswordError] = useState("");
    const [registerSubmit, setRegisterSubmit] = useState("");

    const usernameId = useId();
    const passwordId = useId();
    const regUsernameId = useId();
    const regPasswordId = useId();

    const setOpenModal = (event) => {
        dialogRef.current.showModal();
        setShowSignIn(true);
        setShowRegister(false);
        setUsername("");
        setPassword("");
        setRegUsername("");
        setRegPassword("");
        setPermenantAddress("");
        setCurrentAddress("");
        setUsernameError("");
        setPasswordError("");
        setRegUsernameError("");
        setRegPasswordError("");
        setRegisterSubmit("");
    }

    const handleSignInSubmit = (event) => {
        setUsernameError("");
        setPasswordError("");
        if(username==="" && password!="") {
            setUsernameError("This field is required");
            event.preventDefault();
        } else if (password==="" && username!="") {
            setPasswordError("This field is required");
            event.preventDefault();
        } else if(username==="" && password===""){
            setUsernameError("This field is required");
            setPasswordError("This field is required");
            event.preventDefault();
        } else {
            event.preventDefault();
            dialogRef.current.close();
            setSignIn(`Hello, ${username}`);
        } 
    }

    const handleSelect = (event) => {
        const selectedValue = event.target.value;
        setShowSocialMedia(false);
        setShowWebsite(false);
        if (selectedValue === 'social-media') {
            setShowSocialMedia(!showSocialMedia);
        } else if (selectedValue === 'website') {
            setShowWebsite(!showWebsite);
        }
    }

    const handleCheckbox = (event) => {
        if(event.target.checked) {setCurrentAddress(permenantAddress);}
        else {setCurrentAddress("");}
      }

    const handleRegisterSubmit = (event)=> {
        setRegPasswordError("");
        setRegUsernameError("");
        if(regUsername==="" && regPassword!="") {
            setRegUsernameError("This field is required");
            event.preventDefault();
        } else if (regPassword==="" && regUsername!="") {
            setRegPasswordError("This field is required");
            event.preventDefault();
        } else if(regUsername==="" && regPassword===""){
            setRegUsernameError("This field is required");
            setRegPasswordError("This field is required");
            event.preventDefault();
        } else {
            event.preventDefault();
            setRegisterSubmit("Account Created!")
        }
    }
    
    
    return (
        <div className="header-modal">
            <button aria-label="open log in form" className="form-open-button" onClick={setOpenModal}>
                {signIn}
            </button>
            <dialog ref={dialogRef} className="modal-dialog">
                { showSignIn && <form className="header-signin-form" onSubmit={handleSignInSubmit}>
                    <label htmlFor={usernameId}>Username</label>
                    <input id={usernameId} className="form-signin-name" name="name" type="text" value={username} onChange={(event)=>setUsername(event.target.value)}/>
                    <span className="form-error">{usernameError}</span>
                    <label htmlFor={passwordId}>Password</label>
                    <input id={passwordId} name="password" type="text" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                    <span className="form-error">{passwordError}</span>
                    <span className="submit-close-buttons">
                        <button aria-label="submit log in form" className="form-signin-submit-button" type="submit">Sign in</button> 
                        <button aria-label="close current form" className="form-signin-close-button" onClick={()=> {dialogRef.current.close(); }}>Cancel</button>
                    </span>
                    <span className="text-register-button">
                        <p>Dont' have an account?</p>
                        <button aria-label="go to register" className="form-register-open-button" onClick={()=>{
                            setShowSignIn(!showSignIn); 
                            setShowRegister(!showRegister);
                            }}>
                            Register
                        </button> 
                    </span> 
                </form> }

                { showRegister && <form className="header-register-form" onSubmit={handleRegisterSubmit}>
                    <label htmlFor={regUsernameId}>Username</label>
                    <input id={regUsernameId} name="name" type="text" value={regUsername} onChange={(event)=>setRegUsername(event.target.value)}/>
                    <span className="form-error">{regUsernameError}</span>
                    <label htmlFor={regPasswordId}>Password</label>
                    <input id={regPasswordId} name="password" type="text" value={regPassword} onChange={(event)=>setRegPassword(event.target.value)}/>
                    <span className="form-error">{regPasswordError}</span>
                    <label>Permenant Address</label>
                    <input name="permenant" type="text" value={permenantAddress} onChange={(event)=> setPermenantAddress(event.target.value)}/>
                    <span className="form-error"></span>
                    <label>Current Address</label>
                    <label className="same-as-permenant">Same as Permenant address
                        <input name="same-address" type="checkbox" onChange={handleCheckbox}/>
                    </label>
                    <input name="current address" type="text" value={currentAddress} onChange={(event) => setCurrentAddress(event.target.value)}/>
                    <label>How you know us?</label>
                    <select name="know-channel" onChange={handleSelect}>
                        <option value=""></option>
                        <option value="social-media">Social media</option>
                        <option value="website">Website</option>
                    </select>
                    { showSocialMedia && <label>Choose social media
                        <select name="choose-social-media">
                            <option value=""></option>
                            <option value="facebook">Facebook</option>
                            <option value="ins">Instagram</option>
                        </select> 
                    </label> }
                    { showWebsite && <label>Choose website
                        <select name="choose-website">
                            <option value=""></option>
                            <option value="google">Google</option>
                            <option value="amazon">Amazon</option>
                    </select>
                    </label> }
                    <span className="submit-close-buttons">
                        <button aria-label="submit registration" className="form-register-submit-button">Submit</button>
                        <button aria-label="close current form" className="form-signin-close-button" onClick={()=> {dialogRef.current.close();}}>Cancel</button>
                    </span>
                    <span>{registerSubmit}</span>
                    <span className="text-register-button">
                        <p>Back to</p>
                        <button aria-label="go to sign in" className="form-register-open-button" onClick={()=> {setShowSignIn(!showSignIn); setShowRegister(!showRegister);}}>Sign in</button>
                    </span>
                </form> }  
            </dialog>
        </div>
    )
}

export default Modal;