import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function VideoDetail() {
  const { videoId } = useParams();
  const keyword = sessionStorage.getItem('keyword');
  const {youtube} = useYoutubeApi();
  const {isLoading, error, data:videos} = useQuery(
    ['videos',keyword], ()=> youtube.search(keyword)

    );
  
  return( 
  <div>
    {isLoading&& <p>Loading...</p>}
    {error && <p>SomeThing is worng</p>}
    {videos && (
        
        <div className='grid grid-cols-4 w-2000 gap-4'>
        {videos.map(video => (
          video.id===videoId && 
          <div className='col-span-3'>
            <ul>
            <VideoCard key={video.id} video={video}/>
            </ul>
            <div>{video.snippet.description}</div>
          </div>
          ))}
        <div className='col-span-1'>
        {videos && (
        
        <ul className=''>
        {videos.map(video => 
        <Link to={`/videos/watch/${video.id}`}>
           {video.id!==videoId && <VideoCard key={video.id} video={video}/>}
        </Link>
        )}
        </ul>
        )}
        </div>
        </div>
        )}
    keyword : {keyword}
    <br />
    id : {videoId}
    <br />
    VideoDetail

  </div>
  
  );
}
