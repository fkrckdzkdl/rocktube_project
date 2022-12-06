import { createContext, useContext } from "react";
import Youtube from "../api/Youtube";
import YoutubeClient from "../api/YoutubeClient";

export const YoutubeApiContext = createContext();

const client = new YoutubeClient();
const youtube = new Youtube(client);

// 프로바이더 안에있는 자식컨텐츠에서 YOutube 객체를 사용가능하다
export function YoutubeApiProvider({children}){
    return <YoutubeApiContext.Provider value={{youtube}}>
        {children}
        </YoutubeApiContext.Provider>
}

// useContext로 호출하는게 아니라 api라고 만들고 함수를 호출하네
export function useYoutubeApi(){
    return useContext(YoutubeApiContext)
}