import { Search, ShoppingBag, User, Menu } from "lucide-react";
import Logo from "../Logo/Logo";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/Components/ui/sheet";

const Navber = () => {
    const navItems = ['Home', 'Company', 'Services', 'Cases', 'Blog', 'Shop', 'Contact', 'More'];

    return (
        <section className="relative px-28 w-full bg-[#0a0a0a] font-sans selection:bg-cyan-500/30">
            <nav className="relative z-50 flex items-center justify-between px-4 py-4 md:px-6 lg:px-12 bg-black/10 backdrop-blur-md border-b border-white/5">

              
                <div className="flex items-center gap-4">
                    {/* Mobile Menu (Visible only on small/medium screens) */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Menu className="w-6 h-6 text-white cursor-pointer hover:text-cyan-400 transition" />
                            </SheetTrigger>
                            <SheetContent side="left" className="bg-[#0a0a0a] border-white/10 text-white w-[250px]">
                                <SheetTitle className="text-white border-b border-white/10 pb-4 mb-4">Menu</SheetTitle>
                                <nav className="flex flex-col gap-6 mt-8">
                                    {navItems.map((item) => (
                                        <a
                                            key={item}
                                            href={`#${item.toLowerCase()}`}
                                            className="text-lg font-medium hover:text-cyan-400 transition-colors"
                                        >
                                            {item}
                                        </a>
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

                {/* Center: Desktop Navigation (Hidden on mobile) */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`text-sm font-medium transition-colors hover:text-cyan-400 ${item === 'Home' ? 'text-white border-b-2 border-cyan-400 pb-1' : 'text-gray-300'
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Right Side: Icons */}
                <div className="flex items-center gap-3 md:gap-5 text-white">
                    <User className="w-5 h-5 cursor-pointer hover:text-cyan-400 transition hidden sm:block" />
                    <Search className="w-5 h-5 cursor-pointer hover:text-cyan-400 transition" />
                    <div className="relative cursor-pointer group">
                        <ShoppingBag className="w-5 h-5 group-hover:text-cyan-400 transition" />
                        <span className="absolute -top-2 -right-2 bg-cyan-500 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                            0
                        </span>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navber;