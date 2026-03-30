import { Link } from "react-router";
import heroLogo from "../../assets/logo_white.png"; // Import it as a variable

const Logo = () => {
    return (
        <div>
            {/* Use the variable in the src */}
            <Link to={"/"}>  <img src={heroLogo} alt="Company Logo" className="w-50 h-auto" /></Link>
           
        </div>
    );
};

export default Logo;