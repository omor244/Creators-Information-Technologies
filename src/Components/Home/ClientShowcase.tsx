import { clientLogos } from "../Data/data";


const ClientShowcase = () => {
   

    return (
        <section className="w-full bg-[#050505] py-28 relative overflow-hidden">
            {/* Soft ambient background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Minimalist Header */}
                <div className="text-center mb-20 space-y-4">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <div className="h-[1px] w-8 bg-blue-600/50"></div>
                        <span className="text-primary text-[11px] font-bold uppercase tracking-[0.4em]">
                            Our Ecosystem
                        </span>
                        <div className="h-[1px] w-8 bg-blue-600/50"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Built for <span className="text-primary  font-serif">Industry Leaders</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
                        Trusted by the most innovative organizations to deliver reliable
                        software engineering and transformative digital experiences.
                    </p>
                </div>

                {/* The "White Card" Grid with Popular Hover Effects */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {clientLogos.map((client, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center justify-center h-44 bg-white rounded-2xl 
                                     shadow-[0_4px_20px_rgba(0,0,0,0.1)] 
                                     border border-transparent 
                                     transition-all duration-500 ease-out 
                                     hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]
                                     hover:border-primary p-6 cursor-pointer"
                        >
                            <div className="flex-1 flex items-center justify-center w-full">
                                <img
                                    src={client.url}
                                    alt={client.name}
                                    className={` ${client.name === "Bestway Group" ? "w-[800px]" : "max-w-full"} max-h-16   object-contain 
                                             filter group-hover:opacity-100 scale-110 group-hover:scale-110 
                                             transition-all duration-500`}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${client.name}&background=f1f5f9&color=3b82f6&bold=true`;
                                    }}
                                />
                            </div>

                            {/* Subtle name badge inside white card - Highlights on hover */}
                            <div className="mt-4 pt-3 border-t border-gray-50 w-full text-center transition-colors duration-500 group-hover:border-blue-50/50">
                                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest transition-colors duration-500 group-hover:text-primary">
                                    {client.name}
                                </span>
                            </div>

                            {/* Decorative Bottom Line on Hover */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-500 rounded-full transition-all duration-500 group-hover:w-12" />
                        </div>
                    ))}
                </div>

              

            </div>
        </section>
    );
};

export default ClientShowcase;