

const AboutSection = () => {
    // A high-quality professional team URL
    const imageUrl = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070";

    return (
        <section className="relative w-full bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20 font-sans selection:bg-cyan-500/30 overflow-hidden">

            {/* Background Decorative Blur (Cyan Glow behind image) */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Side: Image Container */}
                <div className="relative w-full aspect-[4/5] rounded-3xl border border-white/10 shadow-2xl overflow-hidden group">
                    <img
                        src={imageUrl}
                        alt="Professional Team"
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />

                    {/* The Custom "The7" Corner Cut-out */}
                    <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-[#0a0a0a] rounded-tl-[100px] border-t border-l border-white/10" />

                    {/* Subtle Overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent pointer-events-none" />
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col items-start gap-8">

                    {/* Badge */}
                    <span className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 text-xs font-bold uppercase tracking-widest text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                        Who We Are
                    </span>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                        A Team of Professionals,<br />
                        Passionate About New<br />
                        <span className="text-cyan-400">Technologies</span> & Progress
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
                        We don't just build websites; we create digital experiences that drive growth.
                        Our team combines creative design with technical excellence to ensure your
                        business stays ahead in an ever-evolving digital landscape.
                    </p>

                    {/* Separator */}
                    <hr className="w-full border-t border-white/10" />

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full pt-4">

                        <div className="space-y-2">
                            <div className="flex items-baseline gap-1">
                                <span className="text-xl font-medium text-cyan-500">est.</span>
                                <span className="text-5xl font-extrabold text-white tracking-tighter">2012</span>
                            </div>
                            <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">
                                A decade of expertise
                            </p>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-extrabold text-white tracking-tighter">94,5</span>
                                <span className="text-3xl font-bold text-cyan-500">%</span>
                            </div>
                            <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">
                                Satisfied customers
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;