import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { slideData } from "../Data/data";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import { cn } from "@/lib/utils"; // Ensure you have this shadcn utility

const HeroSection = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
    );

    // Update active dot when the slide changes
    React.useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="relative w-full h-[85vh] bg-[#0a0a0a] overflow-hidden">
            <Carousel
                setApi={setApi}
                plugins={[plugin.current]}
                className="w-full h-full"
                opts={{
                    loop: true,
                    duration: 50, // Faster, smoother transitions
                }}
            >
                <CarouselContent className="h-[85vh] ml-0">
                    {slideData.map((slide, index) => (
                        <CarouselItem key={slide.id} className="relative h-full pl-0">
                            {/* Background Layer with Ken Burns Effect */}
                            <div
                                className={cn(
                                    "absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[7000ms] ease-out scale-110",
                                    current === index ? "scale-100" : "scale-110"
                                )}
                                style={{ backgroundImage: `url('${slide.image}')` }}
                            >
                                {/* Dark Overlay for Readability */}
                                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                                
                                {/* Professional Light Leaks */}
                                <div className="absolute -top-40 -right-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
                                <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
                            </div>

                            {/* Content Layer */}
                            <main className="relative z-10 flex flex-col justify-center px-6 lg:px-20 h-full max-w-7xl mx-auto">
                                <div className="space-y-6">
                                    {/* Animated Top Badge */}
                                    <div className={cn(
                                        "inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 transition-all duration-1000 delay-300",
                                        current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    )}>
                                        Premium Agency Solutions
                                    </div>

                                    <h1 className={cn(
                                        "text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1] tracking-tighter transition-all duration-1000 delay-500",
                                        current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    )}>
                                        <span className="text-cyan-400">{slide.highlight}</span> <br />
                                        {slide.title}
                                    </h1>

                                    <p className={cn(
                                        "text-gray-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed transition-all duration-1000 delay-700",
                                        current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    )}>
                                        {slide.description}
                                    </p>

                                    <div className={cn(
                                        "flex flex-wrap gap-5 pt-4 transition-all duration-1000 delay-1000",
                                        current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    )}>
                                        <Button
                                            className="h-14 px-10 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold shadow-[0_15px_30px_-10px_rgba(6,182,212,0.5)] transition-all active:scale-95"
                                        >
                                            {slide.cta}
                                        </Button>

                                        <Button
                                            variant="outline"
                                            className="h-14 px-8 rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-black transition-all active:scale-95"
                                        >
                                            View Portfolio
                                        </Button>
                                    </div>
                                </div>
                            </main>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Professional Navigation Dots */}
            <div className="absolute bottom-4 right-6 lg:right-32  z-20 flex items-center gap-4">
                {slideData.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => api?.scrollTo(i)}
                        className="group relative flex items-center justify-center p-2"
                    >
                        {/* The Dot */}
                        <div className={cn(
                            "h-1.5 transition-all duration-500 rounded-full",
                            current === i ? "w-10 bg-cyan-400" : "w-3 bg-white/20 group-hover:bg-white/40"
                        )} />
                    </button>
                ))}
                
                {/* Slide Counter */}
                <div className="ml-4 text-white/20 font-mono text-sm tracking-widest">
                    <span className="text-white/60">0{current + 1}</span> / 0{slideData.length}
                </div>
            </div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-10 right-6 lg:right-20 z-20 hidden md:block">
                <div className="flex flex-col items-center gap-3">
                    <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] rotate-90 mb-8">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;