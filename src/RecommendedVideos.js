import React from 'react'
import './RecommendedVideo.css'
import VideoCard from './VideoCard'
import img1 from './pnkuI8KXW_8-SD.jpg'
import img2 from './L-lc1cnnVLE-SD.jpg'
import img3 from './VwjFK1Q_-go-SD.jpg'
import img4 from './imx_-6tHjhw-SD.jpg'
import img5 from './gDOmzKGUEf8-SD.jpg'
import img6 from './taylorSwift.jpg'
import img7 from './ijustine.jpg'
import img8 from './justinBeber.jpg'
import img9 from './j1wFsMBArR0-SD.jpg'
function RecommendedVideos() {
    return (
        <div className="recommendvideo">
           <h2>Recommend videos</h2>
           <div className="recommendedVideos">
               <VideoCard
               title="A vlog on the New Iphone12"
               views="1M Views"
               timestamp="30 Days ago"
               channelImage=""
               image={img7}
               />
             <VideoCard
               title="Spotify Clone"
               views="222K Views"
               timestamp="75 Days ago"
               channelImage=""
               image={img1}
               />
               <VideoCard
               title="This is Football"
               views="2.0M Views"
               timestamp="4 Days ago"
               channelImage=""
               image={img2}
               />
               <VideoCard
               title="Beautiful football 2020"
               views="900K Views"
               timestamp="7 Days ago"
               channelImage=""
               image={img3}
               />
               <VideoCard
               title="PS5 is finally here"
               views="2.3M Views"
               timestamp="90 Days ago"
               channelImage=""
               image={img4}
               />
               <VideoCard
               title="Magic of the Year-2020"
               views="9M Views"
               timestamp="45 Days ago"
               channelImage=""
               image={img5}
               />
            <VideoCard
               title="Taylor Swift-the lakes(Official)"
               views="5.3M Views"
               timestamp="18 Aug 2020"
               channelImage=""
               image={img6}
               />
               <VideoCard
               title="Justin Bieber the New Begining"
               views="53M Views"
               timestamp="1 Aug 2020"
               channelImage=""
               image={img8}
               />
               <VideoCard
               title="The Smartest Tech of 2020"
               views="100K Views"
               timestamp="4 Oct 2020"
               channelImage=""
               image={img9}
               />
               
               
               </div>

        </div>
    )
}

export default RecommendedVideos
