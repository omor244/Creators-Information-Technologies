import  { useCallback} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../Data/data';


const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'start', skipSnaps: false },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    );

   

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    

    return (
        <section className="w-full bg-[#0a0a0a] py-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Header with Navigation Controls */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4">
                        <span className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                            Testimonials
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            What Clients Say <br />
                            <span className="text-primary">About Our Work</span>
                        </h2>
                    </div>

                    {/* Custom Navigation Arrows */}
                    <div className="flex gap-3">
                        <button
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Slider Viewport */}
                <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6"
                            >
                                <div className="flex flex-col h-full gap-8 group">
                                    {/* Message Card */}
                                    <div className="relative bg-white/5 border border-white/10 p-10 rounded-2xl shadow-2xl transition-all duration-500 group-hover:bg-white/[0.08] flex-grow">
                                        <Quote className="text-blue-500 w-10 h-10 mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />

                                        <h3 className="text-white text-xl font-bold mb-4 line-clamp-1">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-400 leading-relaxed font-light italic text-base line-clamp-4">
                                            "{item.content}"
                                        </p>

                                        {/* Speech bubble tail */}
                                        <div className="absolute -bottom-3 left-10 w-6 h-6 bg-[#121212] border-r border-b border-white/10 rotate-45" />
                                    </div>

                                    {/* User Info */}
                                    <div className="flex items-center gap-4 px-2">
                                        <div className="relative">
                                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500/30 group-hover:border-blue-500 transition-all duration-500">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center border-2 border-[#0a0a0a]">
                                                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">
                                                {item.name}
                                            </h4>
                                            <p className="text-gray-500 text-sm font-medium tracking-wide">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

              

            </div>
        </section>
    );
};

export default Testimonials;