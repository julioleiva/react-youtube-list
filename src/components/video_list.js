import React from 'react';
import VideoListItem from '../components/video_list_item';

//CLASE FUNCIONAL
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}/>
    })

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );


};

export default VideoList;