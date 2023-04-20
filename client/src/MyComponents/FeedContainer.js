import React from "react"
import "./Feed.css";

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const FeedContainer = ({thumbnail, channelImage, heading, channelName, views, time}) => {
    return (
        <div className="feedContainer">

            <img className="thumbnailImage" src = {thumbnail} alt = "youtube thumbnail"/>

            <div className="video__desc">
                <img className="channelImage" src = {channelImage} alt="youtube channel logo" />
                <h6 className="heading">{heading}</h6>
            </div>

            <div className="video__info">
                <p>{channelName}</p>
                <div className="other">
                    <p>{views}</p>
                    <p>|</p>
                    <p>{time}</p>
                </div>
            </div>
            
                
        </div>
    )
}