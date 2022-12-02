import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { json, useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import axios from 'axios';

export default function Videos() {
  const { keyword } = useParams();
  const {isLoading, error, data:videos} = useQuery(
    ['videos',keyword],
    // 진짜 api 사용
    // async ()=>{return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=오킹&key=AIzaSyBGbyR4X5y1I_zZxS6VPGF8ouWhVT6HTEg`)
    // mock data 사용
    // fatch 사용
    // async ()=>{return fetch(`/videos/${keyword? 'search':'popular'}.json`)
    // .then((res)=>res.json())
    // .then((data)=>data.items);
    // axios 사용
    async ()=>{
      return axios.get(`/videos/${keyword? 'search':'popular'}.json`)
      .then((res)=>res.data.items);
  });
  return(
    <>
      <div>Videos {keyword ? `🔍${keyword}` : '🔥'}</div>;
      {isLoading&& <p>Loading...</p>}
      {error && <p>SomeThing is worng</p>}
      {videos && <ul>
        {videos.map(video => <VideoCard key={video.id} video={video}/>)}
        </ul>}
    </>
    )
}
