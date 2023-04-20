import React from "react"
import "./Sidebar.css";
import {SidebarOption} from "./SidebarOption";

import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import SlideshowIcon from '@mui/icons-material/Slideshow';

export const Sidebar = () => {
    return (
        <div className="sidebar">

            <SidebarOption
            Icon = {HomeIcon}
            title = "Home"
            />

            <SidebarOption
            Icon = {TimelineIcon}
            title = "Shorts"
            />

            <SidebarOption
            Icon = {SlideshowIcon}
            title = "Subscriptions"
            />
        </div>
    )
}