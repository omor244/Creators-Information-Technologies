import { Quote, ChevronRight } from 'lucide-react';
import { testimonials } from '../Data/data';



const Testimonials = () => {
    return (
        <section className="w-full bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-blue-500 font-bold text-2xl md:text-3xl tracking-tight">
                        What Clients Say About Us
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((item, index) => (
                            <div key={index} className="flex flex-col gap-8 group">

                                {/* Message Card */}
                                <div className="relative bg-white/5 border border-white/10 p-10 rounded-xl shadow-2xl transition-all duration-500 group-hover:bg-white/[0.08] group-hover:-translate-y-2">
                                    <Quote className="text-blue-500 w-8 h-8 mb-4 opacity-50" />
                                    <h3 className="text-white text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-light italic">
                                        "{item.content}"
                                    </p>

                                    {/* Small arrow pointing down to the avatar */}
                                    <div className="absolute -bottom-3 left-10 w-6 h-6 bg-[#1a1a1a] border-r border-b border-white/10 rotate-45" />
                                </div>

                                {/* User Info */}
                                <div className="flex items-center gap-4 px-2">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500/30 group-hover:border-blue-500 transition-colors">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-white font-bold text-lg">{item.name}</h4>
                                        <p className="text-gray-500 text-sm">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Button (Visual only) */}
                    <button className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-full items-center justify-center text-white shadow-lg shadow-blue-600/40 hover:scale-110 transition-transform active:scale-95">
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Progress Bar (Visual only) */}
                    <div className="mt-16 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-blue-500/50 rounded-full" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;