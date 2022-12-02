import React from "react";

export default function VideoCard({video}){
    return (<div>
        {video.snippet.title}-
        {video.snippet.channelTitle}
    </div>
    )
}