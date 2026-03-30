
import { FiSearch } from 'react-icons/fi'; 
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import Logo from '../Logo/Logo';

const Footer = () => {
    const socials = [
        { Icon: FaFacebookF, href: "#" },
        { Icon: FaTwitter, href: "#" },
        { Icon: FaYoutube, href: "#" },
        { Icon: FaInstagram, href: "#" }
    ];

    const companyLinks = ['About', 'Services', 'Team', 'Cases', 'Blog', 'Shop', 'Contact'];
    const infoLinks = ['Design System', 'Blocks & Elements', '404 Error page', 'Maintenance Page', 'Search results', 'Terms & Conditions', 'Cookie Policy'];

    return (
        <footer className="w-full bg-[#0a0a0a] pt-24 pb-12 px-6 md:px-12 lg:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                {/* Column 1: Brand & Contact */}
                <div className="flex flex-col gap-6">
                    <div className="text-white text-4xl font-bold tracking-tighter">
                        <Logo/>
                    </div>

                    <div className="space-y-1">
                        <p className="text-white text-2xl font-bold tracking-tight">+1 001 234 5678</p>
                        <p className="text-gray-500 text-sm">Monday to Friday: 9 am – 6 pm</p>
                    </div>

                    <button className="w-fit bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-blue-600/20 active:scale-95 text-sm uppercase tracking-wider">
                        Request for Quote
                    </button>
                </div>

                {/* Column 2: Company Links */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs">Company</h4>
                    <ul className="flex flex-col gap-3">
                        {companyLinks.map((link) => (
                            <li key={link}>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-base inline-block">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Info Links */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs">Info</h4>
                    <ul className="flex flex-col gap-3">
                        {infoLinks.map((link) => (
                            <li key={link}>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-base inline-block">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Connect & Search */}
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs">Connect</h4>
                        <div className="flex gap-4">
                            {socials.map(({ Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-transparent border-b border-white/10 py-2 pr-10 text-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <FiSearch className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-hover:text-blue-500 cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase font-medium tracking-widest">
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                    <span>© 2026 The Seven</span>
                    <span className="hidden md:inline text-white/10">|</span>
                    <span>All Rights Reserved</span>
                    <span className="hidden md:inline text-white/10">|</span>
                    <span>Powered by <a href="#" className="text-blue-500 hover:text-white underline decoration-blue-500/30 underline-offset-4">The7 Theme</a></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;