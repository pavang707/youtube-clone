import React ,{useState}from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'
import img from './youtube.svg'
function Header() {
     const [input,setinput]=useState('')
    return (
   
        <>
        <div className="header">
        <div className="header__left">
        <MenuIcon/>
        <Link to="/">
        <img
         className="header-logo"
         src={img}
         />
      </Link>
         
         </div>
        <div className="header__input">
         <input onChange={e=>setinput(e.target.value)} value={input} type="text" placeholder="search"/>
        <Link to={`/search/${input}`}>
        <SearchIcon className="header__button"/>
        </Link>
        </div>
        <div className="header__icons">
           
         <VideoCallIcon className="header__icon"/>
         <AppsIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        <Avatar
        alt="pavan"
        src=''
        >PG</Avatar>
           
            </div>
            
        </div>
        </>
        
    )
}

export default Header
