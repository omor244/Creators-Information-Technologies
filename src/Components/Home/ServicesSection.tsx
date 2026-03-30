import React from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '../Data/data';



const ServicesSection = () => {
    return (
        <section className="w-full bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                {/* Header Block */}
                <div className="text-center mb-20 space-y-4">
                    <span className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
                        What We Do
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
                        A Full Range of Modern Marketing & <br />
                        <span className="text-cyan-400 text-opacity-80">Creative Services</span> for Your Business
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        We provide expert solutions tailored to your business needs, ensuring
                        maximum growth and digital impact.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
                        >
                            {/* Image Container with Custom Corner */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                                />
                                {/* The Signature Corner Cut-out */}
                                <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-[#0a0a0a] rounded-tl-[60px] border-t border-l border-white/10" />
                            </div>

                            {/* Content */}
                            <div className="p-10 text-center space-y-6">
                                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {service.title}
                                </h3>
                                <a
                                    href={service.link}
                                    className="inline-flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group/link"
                                >
                                    View Details
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;