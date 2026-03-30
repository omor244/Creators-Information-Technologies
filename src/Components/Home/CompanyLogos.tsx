import { companies } from "../Data/data";




const CompanyLogos = () => {
    return (
        <section className="w-full bg-[#0a0a0a] py-20 px-6 border-y border-white/5">
            <div className="max-w-7xl mx-auto text-center">

                <h2 className="text-cyan-400 font-semibold text-sm uppercase tracking-[0.3em] mb-16">
                    Proud to Work with These Companies
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center justify-center min-w-[120px] h-16"
                        >
                            <img
                                src={company.url}
                                alt={`${company.name} logo`}
                                // Removed 'brightness-0 invert' to ensure visibility first
                                // Added 'grayscale' to keep the theme consistent but allow loading
                                className="max-h-10 w-36 hover:scale-125 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                onError={(e) => {
                                    // Fallback if the image URL is dead
                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${company.name}&background=0D1117&color=22d3ee`;
                                }}
                            />

                            {/* Subtle Glow */}
                            <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CompanyLogos;