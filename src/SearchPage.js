import React from 'react'
import './SearchPage.css'
import VideoRow from './VideoRow'
import TuneOutLinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import img from './youtube-logo.png'
import img1 from './j1wFsMBArR0-SD.jpg'
import img5 from './justinBeber.jpg'
import img6 from './taylorSwift.jpg'

function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchPage__filter">
            <TuneOutLinedIcon/>
            <h2>FILTER</h2>
            
            </div>
            <hr/>
            <ChannelRow
            image={img1}
            Channel="Pavan Gaikwad"
            verified
            subs="650k"
            noOfvideos="1020"
            description="Developed Web App"
            />
            <hr/>
            <VideoRow
            views="3.5M views"
            subs="59Lakhs"
            timestamp="3 Days ago"
            title="Justin Bieber (Official)"
            image={img5}
            />
              <VideoRow
            views="1.5M views"
            subs="29Lakhs"
            timestamp="3 Days ago"
            title="Taylor Swift-the Lakes(official)"
            image={img6}
            />
          
        </div>
    )
}

export default SearchPage
