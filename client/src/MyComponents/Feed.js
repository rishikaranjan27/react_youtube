import React, {useState} from "react"
import "./Feed.css";
import {FeedContainer} from "./FeedContainer";

export const Feed = () => {

    const [feeds, setFeeds] = useState([
        {
            thumbnail : "https://i.ytimg.com/vi/0cfBDICQJM4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKaypOsFSMi_oxwmZZ18lcc8bC5Q", 
            channelImage : "https://yt3.ggpht.com/BIwjQVMaK6VzcJAId4o-F0D0em3OHCPVOzCF9aSNCGn7Sd-3b3YsQQf4myx_qHo3ULjpcrQ1lg=s68-c-k-c0x00ffffff-no-rj",
            heading : "We Prank Called Zach Kornfeld - You Can Sit With Us Ep. 30",
            channelName : "You Can Sit With Us",
            views : "180K views",
            time : "2 hours ago"

        },

        {
            thumbnail : "https://i.ytimg.com/vi/0cfBDICQJM4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKaypOsFSMi_oxwmZZ18lcc8bC5Q", 
            channelImage : "https://yt3.ggpht.com/BIwjQVMaK6VzcJAId4o-F0D0em3OHCPVOzCF9aSNCGn7Sd-3b3YsQQf4myx_qHo3ULjpcrQ1lg=s68-c-k-c0x00ffffff-no-rj",
            heading : "We Prank Called Zach Kornfeld - You Can Sit With Us Ep. 30",
            channelName : "You Can Sit With Us",
            views : "180K views",
            time : "2 hours ago"

        },

        {
            thumbnail : "https://i.ytimg.com/vi/0cfBDICQJM4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKaypOsFSMi_oxwmZZ18lcc8bC5Q", 
            channelImage : "https://yt3.ggpht.com/BIwjQVMaK6VzcJAId4o-F0D0em3OHCPVOzCF9aSNCGn7Sd-3b3YsQQf4myx_qHo3ULjpcrQ1lg=s68-c-k-c0x00ffffff-no-rj",
            heading : "We Prank Called Zach Kornfeld - You Can Sit With Us Ep. 30",
            channelName : "You Can Sit With Us",
            views : "180K views",
            time : "2 hours ago"

        },

        {
            thumbnail : "https://i.ytimg.com/vi/0cfBDICQJM4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKaypOsFSMi_oxwmZZ18lcc8bC5Q", 
            channelImage : "https://yt3.ggpht.com/BIwjQVMaK6VzcJAId4o-F0D0em3OHCPVOzCF9aSNCGn7Sd-3b3YsQQf4myx_qHo3ULjpcrQ1lg=s68-c-k-c0x00ffffff-no-rj",
            heading : "We Prank Called Zach Kornfeld - You Can Sit With Us Ep. 30",
            channelName : "You Can Sit With Us",
            views : "180K views",
            time : "2 hours ago"

        },

        {
            thumbnail : "https://i.ytimg.com/vi/0cfBDICQJM4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKaypOsFSMi_oxwmZZ18lcc8bC5Q", 
            channelImage : "https://yt3.ggpht.com/BIwjQVMaK6VzcJAId4o-F0D0em3OHCPVOzCF9aSNCGn7Sd-3b3YsQQf4myx_qHo3ULjpcrQ1lg=s68-c-k-c0x00ffffff-no-rj",
            heading : "We Prank Called Zach Kornfeld - You Can Sit With Us Ep. 30",
            channelName : "You Can Sit With Us",
            views : "180K views",
            time : "2 hours ago"

        },

        {
            thumbnail : "https://i.ytimg.com/vi/0cfBDICQJM4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKaypOsFSMi_oxwmZZ18lcc8bC5Q", 
            channelImage : "https://yt3.ggpht.com/BIwjQVMaK6VzcJAId4o-F0D0em3OHCPVOzCF9aSNCGn7Sd-3b3YsQQf4myx_qHo3ULjpcrQ1lg=s68-c-k-c0x00ffffff-no-rj",
            heading : "We Prank Called Zach Kornfeld - You Can Sit With Us Ep. 30",
            channelName : "You Can Sit With Us",
            views : "180K views",
            time : "2 hours ago"

        },


    ]);

    return (
        <div className="feed">
                {
                    feeds.map(feed => (
                        <FeedContainer
                        thumbnail = {feed.thumbnail}
                        channelImage = {feed.channelImage}
                        heading = {feed.heading}
                        channelName = {feed.channelName}
                        views = {feed.views}
                        time = {feed.time}
                        /> 

                    ))
                }

        </div>
    )
}