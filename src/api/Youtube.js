
export default class Youtube{
    constructor(apiClient) {
        this.apiClient = apiClient;
      }

    // # 을 붇이면 프라이빗 함수

    async search(keyword){
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async channelImageURL(id){
        return this.apiClient
        .channels({params:{part:'snippet',id}})
        .then((res)=> res.data.items[0].snippet.thumbnails.default.url)
    }

    async relatedVideos(id) {
        return this.apiClient
          .search({
            params: {
              part: 'snippet',
              maxResults: 25,
              type: 'video',
              relatedToVideoId: id,
            },
          })
          .then((res) =>
            res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
          );
      }

    // 키워드로 검색했을때 아이디를 객체가 아닌 스트링 형태로 변환하기 위한 로직
    async #searchByKeyword(keyword){
        return this.apiClient
        .search({
            params:{
            part: 'snippet',
            maxResults:25,
            type: 'video',
            q:keyword,  
        }})
        .then((res) =>res.data.items)
        .then((items) => items.map((item) => ({...item, id:item.id.videoId})))
    }

    async #mostPopular(){
        return this.apiClient
        .videos({params:{
            part: 'snippet',
            maxResults:25,
            chart: 'mostPopular',
        }}).then((res) => res.data.items);
    }

}
