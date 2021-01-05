import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './VideCard.css'
function VideoCard({image,title,timestamp,Channel,views,channelImage}) {
    return (
        <div className="videocard">
        <img className="videocard__thumbnail" src={image} alt=""></img>
        <div className="videocard__info">
            <Avatar className="videocard__avatar"
            alt={Channel} src={channelImage}/> 
           <div className="videocard__text">
                <h4>{title}</h4>
             <p> {views} {timestamp}</p>
               </div>
            
        </div>
        </div>
        
    )
}

export default VideoCard
