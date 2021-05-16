import React from 'react';
import "../Css/Sidebar.css";
import SidebarRow from "../components/SidebarRow"
import HomeIcon from "@material-ui/icons/Home"
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscritionIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
function Sidebar() {
    return (
        <div className="sidebar">
           <SidebarRow selected Icons={HomeIcon} title="Home"/>
           <SidebarRow Icons={WhatshotIcon} title="Trending"/>
           <SidebarRow Icons={SubscritionIcon} title="Subscription"/>
           <hr/>
           <SidebarRow Icons={VideoLibraryIcon} title="Library"/>
           <SidebarRow Icons={HistoryIcon} title="History"/>
           <SidebarRow Icons={OndemandVideoIcon} title="Your Videos"/>
           <SidebarRow Icons={WatchLaterIcon} title="Watched Later"/>
           <SidebarRow Icons={ThumbUpAltOutlinedIcon} title="Liked Video"/>
           <SidebarRow Icons={ExpandMoreOutlinedIcon} title="Show more"/>
           <hr/>
        </div>
    )
}

export default Sidebar
