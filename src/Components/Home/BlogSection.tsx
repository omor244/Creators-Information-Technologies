import React from 'react';

const blogPosts = [
    {
        title: "Hello world!",
        category: "Uncategorized",
        date: "October 25, 2025",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "AI Impact on Ipsum Nulla Glavrida Amet for the Future",
        category: "Company",
        secondaryCategory: "Events",
        date: "January 16, 2025",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Lorem Ipsum VPN: Dolor Nulla & Amet Glavrida Morbi",
        category: "Tips & Tricks",
        date: "January 2, 2025",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Better Lorem Ipsum Dolor Condimentum Metus",
        category: "Tips & Tricks",
        date: "July 30, 2024",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    }
];

const BlogSection = () => {
    return (
        <section className="w-full bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
                        From The Blog
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Latest News & Insights
                    </h2>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="group flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 shadow-2xl"
                        >
                            {/* Image Container with Signature Curve */}
                            <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                />
                                {/* The Signature Corner Cut-out */}
                                <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-[#0a0a0a] rounded-tl-[40px] border-t border-l border-white/10" />
                            </div>

                            {/* Post Content */}
                            <div className="p-8 md:w-3/5 flex flex-col justify-center gap-4">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="px-3 py-1 bg-blue-600 text-[10px] font-bold uppercase tracking-wider text-white rounded-md">
                                        {post.category}
                                    </span>
                                    {post.secondaryCategory && (
                                        <span className="px-3 py-1 bg-blue-600 text-[10px] font-bold uppercase tracking-wider text-white rounded-md">
                                            {post.secondaryCategory}
                                        </span>
                                    )}
                                    <span className="text-gray-500 text-xs font-medium">
                                        {post.date}
                                    </span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors duration-300">
                                    {post.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BlogSection;