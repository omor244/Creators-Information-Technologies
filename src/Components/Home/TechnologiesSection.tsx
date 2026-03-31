
import { techStack } from '../Data/data';

const TechnologiesSection = () => {
   

    return (
        <section className="w-full bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">

           
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Block */}
                <div className="flex flex-col items-center text-center mb-20 space-y-6">
                    <span className="bg-primary font-bold text-[11px] text-black  uppercase tracking-[0.25em] px-4 py-1.5 rounded-sm shadow-lg shadow-blue-500/20">
                        Our Technology
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                        Technologies <span className="text-primary"> We Use </span> 
                    </h2>

                    <div className="w-20 h-1.5 bg-primary/50 rounded-full" />

                    <p className="text-gray-400 max-w-3xl mx-auto text-lg font-light leading-relaxed">
                        Leveraging industry expertise and cutting-edge technology to provide exceptional
                        software solutions tailored to your business needs.
                    </p>
                </div>

                {/* Static Grid Layout - Designed for maximum clarity */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="relative hover:scale-105 bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10"
                        >
                            {/* Logo - Always Full Color for Immediate Recognition */}
                            <div className="w-12 h-12 flex-shrink-0">
                                <img
                                    src={tech.logo}
                                    alt={`${tech.name} logo`}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Tech Label */}
                            <span className="text-[#0f172a] font-bold text-sm md:text-[15px] tracking-tight text-center">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;