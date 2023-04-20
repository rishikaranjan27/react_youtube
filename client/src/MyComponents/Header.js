import React from "react"
import "./Header.css";

import MenuIcon from '@mui/icons-material/Menu';

import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';

export const Header = () => {
    return (
        <div className="header">

            <div className="header__left">
                <div><MenuIcon/></div>
                <img src = "https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png"
                alt = "youtube logo"/>
            </div>

            <div className="header__middle">
                <div className="search">
                    <input type="text" placeholder="Search"/>
                    <div className="search__icon"><SearchIcon/></div>
                </div>
                <div className="voice__search"><KeyboardVoiceIcon/></div>
            </div>

            <div className="header__right">
                <div><VideoCallIcon/></div>
                <div><NotificationsNoneIcon/></div>
                <div><HdrAutoIcon/></div>
            </div>

        </div>
    )
}