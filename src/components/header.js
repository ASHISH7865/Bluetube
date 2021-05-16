import React, { useState } from "react";
import "../Css/Header.css";

import youtube from "../pics/youtube.png";
import SearchIcon from "@material-ui/icons/Search";
import VideoCall from "@material-ui/icons/VideoCall";
import AppIcon from "@material-ui/icons/Apps";
import NotificatiosIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">
        <div className="header_left">
            <img className="header_logo" src={youtube} alt="YOUTUBE-LOGO" />

            </div>
            <div className="header_mid">
            <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
                    <Link to={`/search/${inputSearch}`}>
                        <SearchIcon className="header_inputButton"/>
                    </Link>
            </div>
            <div className="header_right">
            <VideoCall  className="header_right"/>
            <AppIcon className="header_right"/>
            <NotificatiosIcon className="header_right"/>
            <Avatar alt="Boy" src="https://img.pngio.com/boy-cartoon-child-clip-art-hat-boy-png-download-378800-free-boy-cartoon-png-900_800.jpg" />
        </div>
        </div>
    )
}

export default Header
