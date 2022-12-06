import axios from "axios";

export default class YoutubeClient{
    constructor(){
        this.httpClient = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: {key: process.env.REACT_APP_YOUTUBE_API_KEY},
        })
    }

    // # 을 붇이면 프라이빗 함수

    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=&key={{key}}
    // axios.get(url,params) base로 만든 axios객체에 params가 더해져서 요청이 간다
    async search(params){
        return this.httpClient.get('search',params);
    }

    async videos(params){
        return this.httpClient.get('videos',params);
    }

    async channels(params){
        return this.httpClient.get('channels',params);
    }

}
