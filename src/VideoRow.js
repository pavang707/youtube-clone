import React from 'react'
import './videoRow.css'
function VideoRow({
    views,
    subs,
    subscription,
    timestamp,
    channel,
    title,
    image
}) {
    return (
        <div className="videoRow">
            <img src={image}/>
            <div className="videoRow__text">
    <h3>{title}</h3>
    <p className="video__headline">{channel}. subscriber{views} Views {timestamp} </p>
    <p className="video__description">{subscription}</p>           
                </div>
            
        </div>
    )
}

export default VideoRow
