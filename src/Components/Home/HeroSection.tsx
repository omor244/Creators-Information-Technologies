import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { slideData } from "../Data/data";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import { cn } from "@/lib/utils";

const HeroSection = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
    );

    React.useEffect(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="relative w-full h-[100svh] bg-[#0a0a0a] overflow-hidden">
            <Carousel
                setApi={setApi}
                plugins={[plugin.current]}
                className="w-full h-full"
                opts={{
                    loop: true,
                    duration: 50,
                }}
            >
                {/* h-[100svh] ensures it fills the screen even with mobile browser address bars */}
                <CarouselContent className="h-[100svh] ml-0">
                    {slideData.map((slide, index) => (
                        <CarouselItem key={slide.id} className="relative h-full pl-0 flex-none w-full">
                            {/* Background Layer */}
                            <div
                                className={cn(
                                    "absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[7000ms] ease-out",
                                    current === index ? "scale-100" : "scale-110"
                                )}
                                style={{ backgroundImage: `url('${slide.image}')` }}
                            >
                                <div className="absolute inset-0 bg-black/70 md:bg-black/60 backdrop-blur-[1px]" />

                                {/* Ambient Glows - Scaled for Tablet/Mobile */}
                                <div className="absolute -top-20 -right-20 w-64 h-64 md:w-[600px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[140px] opacity-50 md:opacity-100" />
                                <div className="absolute top-1/2 -left-20 w-40 h-40 md:w-[400px] md:h-[400px] bg-cyan-500/10 rounded-full blur-[60px] md:blur-[120px] opacity-50 md:opacity-100" />
                            </div>

                            {/* Content Layer */}
                            <main className="relative z-10 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 h-full max-w-7xl mx-auto w-full">
                                <div className="space-y-4 md:space-y-6 lg:space-y-8">
                                    {/* Badge */}
                                    <div className={cn(
                                        "inline-flex items-center self-start rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 transition-all duration-1000 delay-300",
                                        current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    )}>
                                        Premium Agency Solutions
                                    </div>

                                    {/* Title - Optimized for all screens */}
                                    <h1 className={cn(
                                        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tighter transition-all duration-1000 delay-500",
                                        current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    )}>
                                        <span className="text-cyan-400">{slide.highlight}</span> <br />
                                        {slide.title}
                                    </h1>

                                    {/* Description */}
                                    <p className={cn(
                                        "text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-sm sm:max-w-md md:max-w-2xl font-light leading-relaxed transition-all duration-1000 delay-700",
                                        current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    )}>
                                        {slide.description}
                                    </p>

                                    {/* Buttons - Mobile Stacking, Tablet Row */}
                                    <div className={cn(
                                        "flex flex-col sm:flex-row items-center gap-4 pt-4 md:pt-6 transition-all duration-1000 delay-1000",
                                        current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    )}>
                                        <Button
                                            className="h-12 md:h-14 px-8 md:px-10 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold shadow-[0_15px_30px_-10px_rgba(6,182,212,0.5)] transition-all active:scale-95 w-full sm:w-auto"
                                        >
                                            {slide.cta}
                                        </Button>

                                        <Button
                                            variant="outline"
                                            className="h-12 md:h-14 px-8 rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-black transition-all active:scale-95 w-full sm:w-auto"
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

            {/* Navigation Navigation - Consistent spacing for all devices */}
            <div className="absolute bottom-8 left-6 right-6 md:bottom-12 md:right-16 lg:right-32 z-20 flex items-center justify-between md:justify-end gap-6">
                <div className="flex items-center gap-3">
                    {slideData.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => api?.scrollTo(i)}
                            className="group py-2 outline-none"
                        >
                            <div className={cn(
                                "h-1 transition-all duration-500 rounded-full",
                                current === i ? "w-8 md:w-12 bg-cyan-400" : "w-2 md:w-4 bg-white/20 group-hover:bg-white/40"
                            )} />
                        </button>
                    ))}
                </div>

                {/* Slide Counter */}
                <div className="text-white/20 font-mono text-xs md:text-sm tracking-widest tabular-nums">
                    <span className="text-white/60">0{current + 1}</span> / 0{slideData.length}
                </div>
            </div>

            {/* Bottom Scroll Indicator - Purely aesthetic for desktop */}
            <div className="absolute bottom-10 right-10 lg:right-20 z-20 hidden xl:block">
                <div className="flex flex-col items-center gap-3">
                    <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] [writing-mode:vertical-lr] mb-4">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;