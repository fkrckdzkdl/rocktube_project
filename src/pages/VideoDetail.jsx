import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail(){
    // 넘겨준 객체를 useLocation으로 받아온다
    const {state: {video}} = useLocation();
    console.log(video);
    const {title, channelId, channelTitle,description} = video.snippet;
    return(
        // flex 작을때는 col / 클떄는 row 생성
        <section className='flex flex-col lg:flex-row '>
            {/* 화면의 4/6 차지하게 조정 */}
            <article className='basis-5/6 p-4'>
            <iframe 
            id="player" 
            type="text/html"
            width="100%" 
            height="640"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameborder="0" />
            {/* 패딩 조정 */}
            <div className='p-8'>
                <h2 className='text-xl font-bold'>{title}</h2>
                <ChannelInfo id={channelId} name={channelTitle}/>
                {/* pre의 범위가 랩퍼보다 넓지 않게 조정 */}
                <pre className='whitespace-pre-wrap'>{description}</pre>
            </div>
            </article>
            <section className='basis-1/6'>
                <RelatedVideos id={video.id} />
            </section>
        </section>
    )
}