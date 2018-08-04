import React from 'react';
//import Prototypes from 'prototype';

const VideoPage = ({
    videos,
    selectedVideo,
    onHandleSelectVideo,
}) => (
    <div className="col-mid-6">
        <h2>Videos</h2>
        {selectedVideo?
        <div className="selected-video">
            <div key={selectedVideo.id} >
                <video controls src={selectedVideo.mediaUrl} alt={selectedVideo.title}  />
            </div>
        </div>
        : ' '
        }
        <div className="video-thurmnail" >
            {videos.map((video, i)=>(
                <div key={i} onClick={onHandleSelectVideo.bind(this, video)} >
                    <video controls src={video.mediaUrl} alt={video.description} />
                </div>
            ))}
        </div>
    </div>
);

/** 
VideoPage.prototypes = {
    videos: Prototypes.array.IsRequired,
    selectedVideo: Prototypes.object,
    onHandleSelectVideo: Prototypes.func.IsRequired,
};
*/
export default VideoPage;