import { motion } from "framer-motion";

import { Monitor, Smartphone, Globe, Zap } from 'lucide-react';

const features = [
    {
        title: "Web Development",
        description: "High-performance websites built with Next.js and Tailwind CSS for maximum speed.",
        icon: <Monitor className="w-8 h-8 text-cyan-400" />,
    },
    {
        title: "Mobile Solutions",
        description: "Responsive designs that look perfect on every screen size, from Foldables to Desktops.",
        icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
    },
    {
        title: "Global Reach",
        description: "SEO optimized structures to ensure your brand is found by customers worldwide.",
        icon: <Globe className="w-8 h-8 text-cyan-400" />,
    },
    {
        title: "Fast Performance",
        description: "Optimized Core Web Vitals and lightning-fast loading times for better UX.",
        icon: <Zap className="w-8 h-8 text-cyan-400" />,
    },
];

const FeatureSection = () => {
    return (
        <section className="relative w-full py-24 bg-[#0a0a0a] overflow-hidden">
            {/* Background Decorative Blob (Matches Hero) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
                <div className="mb-16">
                    <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">
                        Our Expertise
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        We provide the <span className="text-white/40 italic">best</span> <br />
                        digital solutions.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-300"
                        >
                            <div className="mb-6 p-3 w-fit rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {feature.title}
                            </h4>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;