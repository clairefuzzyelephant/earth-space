import React, {useState} from "react";
import { Link } from "@reach/router";
import "./NavBar.css"
import HamburgerMenu from "react-hamburger-menu";

function NavBar(props) {

    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(!open);
    }

    return (
        <>
        <div className="NavBar-container">
            <Link to="/" className="NavBar-title">
                HUMANS
            </Link>
            <div className="NavBar-linkContainer">  
                <Link to="/mission" className="NavBar-link">
                    Mission
                </Link>
                <Link to="/team" className="NavBar-link">
                    Team
                </Link>
                <Link to="/submit" className="NavBar-link">
                    Submit
                </Link>
                <Link to="/terms" className="NavBar-link">
                    Terms
                </Link>
            </div>
            
        </div>
        <div className="NavBar-hamburgerContainer">
            
            {open ? <div className="NavBar-Hamburger">
                <Link to="/mission" className="NavBar-link" onClick={() => handleClick()}>
                    Mission
                </Link>
                <Link to="/team" className="NavBar-link" onClick={() => handleClick()}>
                    Team
                </Link>
                <Link to="/submit" className="NavBar-link" onClick={() => handleClick()}>
                    Submit
                </Link>
                <Link to="/terms" className="NavBar-link" onClick={() => handleClick()}>
                    Terms
                </Link>
            </div> : null}
            <HamburgerMenu
                className="NavBar-HamburgerIcon"
                isOpen={open}
                menuClicked={() => handleClick()}
                width={30}
                height={30}
                strokeWidth={2}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.5}
            />
        </div>
      </>
    )
}

export default NavBar;