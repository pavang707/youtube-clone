import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcom from '@material-ui/icons/History'
import ondemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltOutLinedIcon from '@material-ui/icons/ThumbDownAlt'
import ExpandMoreOutlineIcon from '@material-ui/icons/ExpandMore'

function Sidebar() {
    return (
        <div className="sidebar">
        <SidebarRow selected Icon={HomeIcon} title="home" />
        <SidebarRow Icon={WhatshotIcon} title="Trending"/>
        <SidebarRow  Icon={SubscriptionIcon} title="Subscription"/>
        <hr/>
        <SidebarRow  Icon={VideoLibraryIcon} title="Library"/>
        <SidebarRow  Icon={HistoryIcom} title="History"/>
        <SidebarRow  Icon={ondemandVideoIcon} title="Your Videos"/>
        <SidebarRow  Icon={WatchLaterIcon} title="Watched Later"/>
        <SidebarRow  Icon={ThumbUpAltOutLinedIcon} title="Liked Videos"/>
        <SidebarRow  Icon={ExpandMoreOutlineIcon} title="Show More"/>
        
        </div>
            
    )
}

export default Sidebar
