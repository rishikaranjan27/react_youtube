import React from "react"
import "./Sidebar.css";

export const SidebarOption = ({Icon, title}) => {
    return (
        <div className="sidebarOption">
            <Icon className="sidebarOption__icon"/>
            <h6>{title}</h6>

        </div>
    )
}