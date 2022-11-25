import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootRouter(){
    return(
        <div>
            <Header />
            <hr style={{width:'90%'}}/>
            <Outlet />
        </div>
    )
}