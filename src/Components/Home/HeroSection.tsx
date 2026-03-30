import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { slideData } from "../Data/data";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";



const HeroSection = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
    );

    return (
        <div className="relative w-full h-[80vh] bg-[#0a0a0a] overflow-hidden font-sans">
            <Carousel
                plugins={[plugin.current]}
                className="w-full h-full"
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent className="h-[80vh]"> {/* Match parent height */}
                    {slideData.map((slide) => (
                        <CarouselItem key={slide.id} className="relative h-full"> {/* Changed h-screen to h-full */}
                            {/* Background Layer */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                                style={{ backgroundImage: `url('${slide.image}')` }}
                            >
                                <div className="absolute inset-0 bg-black/50" />

                                {/* Decorative Gradients - Adjusted positions for 80vh */}
                                <div className="absolute -top-40 -right-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
                                <div className="absolute top-1/4 -left-20 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[100px]" />
                            </div>

                            {/* Content Layer - Centered within 80vh */}
                            <main className="relative z-10 flex flex-col justify-center px-6 lg:px-20 h-full max-w-7xl mx-auto">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                                    <span className="text-cyan-400">{slide.highlight}</span> <br />
                                    {slide.title}
                                </h1>

                                <p className="text-gray-200 text-base md:text-lg max-w-2xl mb-8 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000">
                                    {slide.description}
                                </p>

                                <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                                    <Button
                                        variant="outline"
                                        className="rounded-full px-6 py-5 md:px-8 md:py-6 border-white/30 text-white bg-transparent hover:bg-white hover:text-black text-sm md:text-base font-semibold transition-all"
                                    >
                                        Discover All Elements
                                    </Button>

                                    <Button
                                        className="rounded-full px-8 py-5 md:px-10 md:py-6 bg-[#00C2CB] hover:bg-[#00A8B0] text-black text-sm md:text-base font-bold shadow-[0_10px_40px_-10px_rgba(0,194,203,0.5)] transition-all"
                                    >
                                        {slide.cta}
                                    </Button>
                                </div>
                            </main>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Slider Navigation Dots - Positioned relative to 80vh */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slideData.map((_, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/10" />
                ))}
            </div>
        </div>
    );
};

export default HeroSection;