import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  sessionStorage.setItem('keyword',keyword);
  const {youtube} = useYoutubeApi();
  const {isLoading, error, data:videos} = useQuery(
    ['videos',keyword], ()=> youtube.search(keyword)

    
    // 진짜 api 사용
    // async ()=>{return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=오킹&key=AIzaSyBGbyR4X5y1I_zZxS6VPGF8ouWhVT6HTEg`)
    // mock data 사용
    // fatch 사용
    // async ()=>{return fetch(`/videos/${keyword? 'search':'popular'}.json`)
    // .then((res)=>res.json())
    // .then((data)=>data.items);
    // axios 사용
    );
  return(
    <>
      Videos : {keyword ? `🔍${keyword}` : '🔥'}
      {isLoading&& <p>Loading...</p>}
      {error && <p>SomeThing is worng</p>}
      {videos && (
        
        <ul className='grid grid-cls-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
        {videos.map(video => 
        <VideoCard key={video.id} video={video}/>
        )}
        </ul>
        )}
    </>
    )
}
