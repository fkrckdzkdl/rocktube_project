import axios from "axios";

export default class FakeYoutube{
    // # 을 붇이면 프라이빗 함수
    async search(keyword){
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
        
    }
    // 키워드로 검색했을때 아이디를 객체가 아닌 스트링 형태로 변환하기 위한 로직
    async #searchByKeyword(){
        return axios
        .get(`/videos/search.json`)
        .then((res) =>res.data.items)
        .then((items) => items.map((item) => ({...item, id:items.id.videoId})))
    }

    async #mostPopular(){
        return axios.get(`/videos/popular.json`).then((res) => res.data.items);
    }

}
