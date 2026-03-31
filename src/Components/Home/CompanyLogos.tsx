import { industries } from "../Data/data";


const CompanyLogos = () => {

    return (
        <section className="w-full bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Block - Exact Text from Screenshot_92 */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                      Industries  <span className="text-primary">    We Serve </span>
                      
                    </h2>
                    <p className="text-gray-400 max-w-4xl mx-auto text-base md:text-lg font-light leading-relaxed">
                        We provide custom software solutions across multiple industries, helping businesses streamline processes and achieve their goals.
                    </p>
                    <p className="text-gray-500 max-w-5xl mx-auto text-sm md:text-base font-medium">
                        By incorporating industry-specific features, we help businesses not only meet their immediate needs but also position them for future growth.
                    </p>
                </div>

                {/* Grid Layout - Matching the 2x4 layout in the reference image */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-10 flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/20 min-h-[180px]"
                        >
                            <div className="relative z-10 w-full flex flex-col items-center gap-5">
                                {/* Icon mirrored from industry reference */}
                                <div className="transition-transform duration-500 group-hover:scale-110">
                                    {item.icon}
                                </div>

                                {/* Industry Title */}
                                <span className="text-[#0f172a] font-bold text-lg tracking-tight text-center">
                                    {item.name}
                                </span>
                            </div>

                            {/* Subtle Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyLogos;