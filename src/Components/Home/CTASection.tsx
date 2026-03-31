
import { Phone } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="w-full bg-[#0a0a0a] py-24 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Left Side: Image with signature curve */}
                <div className="relative w-full md:w-1/2 aspect-square md:aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070"
                        alt="Consultation"
                        className="w-full h-full object-cover opacity-80"
                    />
                    {/* The Signature Corner Cut-out */}
                    <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-[#0a0a0a] rounded-tl-[100px] border-t border-l border-white/10" />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2 flex flex-col items-start gap-8">

                    {/* Badge */}
                    <span className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                        Get Started Today
                    </span>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                        Join Thousands of Business Owners & Companies Who Trust <span className="text-cyan-400">Our Services</span> Today!
                    </h2>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-blue-600/20 active:scale-95">
                            Book Phone Consultation
                        </button>

                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                                <Phone className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Call Us</span>
                                <span className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">
                                    +1 001 234 5678
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CTASection;