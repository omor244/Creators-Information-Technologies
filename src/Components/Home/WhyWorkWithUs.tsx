import { Check } from 'lucide-react';

const WhyWorkWithUs = () => {
    const features: string[] = [
        "Top industry specialists",
        "Complex solutions",
        "100% Money back guarantee",
        "Flexible prices",
        "Constant innovations",
        "24/7 Customer support"
    ];

    return (
        <section className="w-full bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Content */}
                <div className="flex flex-col items-start gap-8 order-2 lg:order-1">

                    {/* Badge */}
                    <span className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
                        Why Work With Us
                    </span>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                        We Guarantee Complex Modern <br />
                        <span className="text-cyan-400">Approach</span> & Long-Lasting Results
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xl font-light">
                        If you're looking for a partner that understands the evolving digital landscape, we provide
                        the expertise needed to scale your business. Our methods are proven to deliver
                        consistent growth and high-quality technological integration.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 w-full pt-4">
                        {features.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 group">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500 transition-colors duration-300">
                                    <Check className="w-3 h-3 text-cyan-400 group-hover:text-[#0a0a0a]" />
                                </div>
                                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Image with reversed "The7" corner */}
                <div className="relative aspect-square md:aspect-[4/5] order-1 lg:order-2">
                    {/* Background Decorative Element */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px]" />

                    <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
                            alt="Our Team Working"
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Reversed Signature Corner (bottom-left) */}
                        <div className="absolute -bottom-1 -left-1 w-24 h-24 bg-[#0a0a0a] rounded-tr-[100px] border-t border-r border-white/10" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyWorkWithUs;