import { Search, ShoppingBag, User, Menu } from "lucide-react";
import Logo from "../Logo/Logo";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/Components/ui/sheet";
import { NavLink } from "react-router";

const Navbar = () => {
    const navItems = ['Home', 'Company', 'Services', 'Cases', 'Blog', 'Shop', 'Contact', 'More'];

    return (
        <section className="relative px-4 sm:px-6 md:px-12 lg:px-36 w-full bg-[#0a0a0a] font-sans selection:bg-cyan-500/30">
            <nav className="relative z-50 flex items-center justify-between py-4 bg-black/10 backdrop-blur-md border-b border-white/5">

                <div className="flex items-center gap-4">
                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Menu className="w-6 h-6 text-white cursor-pointer hover:text-cyan-400 transition" />
                            </SheetTrigger>
                            <SheetContent side="left" className="bg-[#0a0a0a] border-white/10 text-white w-[250px]">
                                <SheetTitle className="text-white border-b border-white/10 pb-4 mb-4 font-bold tracking-widest uppercase text-xs">
                                    Navigation
                                </SheetTitle>
                                <nav className="flex flex-col gap-6 mt-8">
                                    {navItems.map((item) => (
                                        <NavLink
                                            key={item}
                                           
                                            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                            className={({ isActive }) =>
                                                `text-lg font-medium transition-colors ${isActive ? "text-cyan-400" : "text-white hover:text-cyan-400"
                                                }`
                                            }
                                        >
                                            {item}
                                        </NavLink>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Logo */}
                    <div className="text-white leading-tight">
                        <Logo />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <NavLink
                            key={item}
                            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-all duration-300 relative pb-1 hover:text-cyan-400 ${isActive
                                    ? 'text-white after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400'
                                    : 'text-gray-400'
                                }`
                            }
                        >
                            {item}
                        </NavLink>
                    ))}
                </nav>

                {/* Right Side: Icons */}
                <div className="flex items-center gap-3 md:gap-5 text-white">
                    <User className="w-5 h-5 cursor-pointer hover:text-cyan-400 transition hidden sm:block" />
                    <Search className="w-5 h-5 cursor-pointer hover:text-cyan-400 transition" />
                    <div className="relative cursor-pointer group">
                        <ShoppingBag className="w-5 h-5 group-hover:text-cyan-400 transition" />
                        <span className="absolute -top-2 -right-2 bg-cyan-500 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-lg shadow-cyan-500/20">
                            0
                        </span>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;