import { Outlet } from "react-router";
import Navber from "../Components/Navber/Navber";
import Footer from "@/Components/Footer/Footer";





const MainLayOut = () => {
    return (
        <div className="bg-black">
            <header>
                <Navber/>
            </header>
            <main>
                <Outlet/>
            </main>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayOut;