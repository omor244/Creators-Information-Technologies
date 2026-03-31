
import { ArrowRight } from 'lucide-react';
import { services } from '../Data/data';

const ServicesSection = () => {
    

    return (
        <section className="w-full bg-[#0a0a0a] py-24 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">

          
            <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/2 -left-24 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

              
                <div className="flex flex-col items-center text-center mb-20 space-y-5">
                    <span className="bg-primary text-black font-bold text-[10px]  uppercase tracking-[0.25em] px-5 py-1.5 rounded-sm shadow-lg shadow-blue-600/20">
                        What We Do
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                        Our Most <span className="text-primary">In-Demand </span> & <br />
                        Services
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        With a promise to deliver the world's most advanced software development
                        services and technologies.
                    </p>
                </div>

                {/* 4-Column Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#fcfcfc] rounded-t-[1.5rem] rounded-bl-[1.5rem] rounded-br-[4rem] p-10 flex flex-col items-start min-h-[300px] md:min-h-[440px] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(59,130,246,0.3)] border border-white/10"
                        >
                            {/* Icon with Ring Container */}
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-10 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6">
                                {service.icon}
                            </div>

                            {/* Text Content */}
                            <div className="space-y-4 flex-grow">
                                <h3 className="text-2xl font-extrabold text-[#0f172a] leading-tight transition-colors duration-500">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    {service.description}
                                </p>
                            </div>

                            {/* Bottom Link Action */}
                            <div className="mt-8 pt-6 border-t border-slate-100 w-full">
                                <a
                                    href={service.link}
                                    className="inline-flex items-center gap-3 text-blue-600 font-bold uppercase tracking-widest text-[10px] group/link"
                                >
                                    <span className="relative overflow-hidden">
                                        View Details
                                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-blue-600 transition-all duration-300 group-hover/link:w-full"></span>
                                    </span>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
                                </a>
                            </div>

                            {/* Dynamic Corner Gradient Overlay (Only visible on hover) */}
                            <div className="absolute inset-0 rounded-t-[1.5rem] rounded-bl-[1.5rem] rounded-br-[4rem] bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;