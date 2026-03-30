import { Outlet } from "react-router";
import Navber from "../Components/Navber/Navber";




const MainLayOut = () => {
    return (
        <div className="bg-black">
            <header>
                <Navber/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer></footer>
        </div>
    );
};

export default MainLayOut;