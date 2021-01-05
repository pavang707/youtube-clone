import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './channelRow.css'
import verifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
function ChannelRow({image,Channel,verified,subs,noOfvideos,description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo"
            alt={Channel} src={image}
            />
            <div className="channelRow__text">
    <h4>{Channel} {verified &&  <verifiedIcon/>}</h4>
    <p> {subs} subscribers {noOfvideos} videos
    </p>
    <p>{description}</p>
                
                </div>
        </div>
    )
}

export default ChannelRow
