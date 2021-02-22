import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import React from "react"
import { Link, useHistory } from "react-router-dom"

import "./Header.css"

function Header({ backButton }){
    //const history = useHistory();
    return(
        <div className = "header">
            
            
            {backButton ? (
                // <IconButton onClick={() => history.replace(backButton)}>
                <Link to={`${backButton}`}>
                    <IconButton> 
                        <ArrowBackIosIcon fontSize = "large" className="header__icon"></ArrowBackIosIcon>
                    </IconButton>
                </Link>
            ):(
                <IconButton>
                    <PersonIcon fontSize = "large" className="header__icon" />
                </IconButton>
            )}
           
            <Link to="/">
                <img
                className = "header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                alt="" 
                />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon fontSize = "large" className="header__icon"></ForumIcon>
                </IconButton>
            </Link>
        </div>
    )
}
export default Header;