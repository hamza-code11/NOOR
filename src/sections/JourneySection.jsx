// sections/JourneySection.jsx
import React from 'react';
import { ArrowRight, Crown } from 'lucide-react';

const JourneySection = () => {
    return (
        <section className="bg-primary py-10 md:py-14 lg:py-18 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-36 h-36 bg-gold/10 rounded-full blur-3xl"></div>

            <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <span className="inline-flex items-center gap-2 bg-gold/20 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full mb-3 md:mb-4 border border-gold/30">
                        <Crown size={14} className="text-gold" />
                        Our Story
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                        The BIGEEST Journey
                    </h2>
                    <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2">
                        From a small dream to Pakistan's largest ecommerce destination
                    </p>
                </div>

                {/* Single Row - Left Image + Right Content */}
                <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden border border-white/10">

                    {/* Left - Image */}
                    <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[250px] sm:min-h-[300px] lg:min-h-[500px]">
                        <img
                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop"
                            alt="Our Journey"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                        />
                        {/* Green Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-transparent lg:bg-gradient-to-r"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-primary/40"></div>

                        {/* Year Badge */}
                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                            <span className="inline-flex items-center gap-2 bg-gold text-primary-dark text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
                                Since 2018
                            </span>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="w-full lg:w-1/2 bg-primary-light/40 backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 flex flex-col justify-center">

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-3 md:mb-5 leading-tight">
                            How We Started & Where We Are Going
                        </h3>

                        {/* Single Description Paragraph */}
                        <p className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                            Noor was launched in 2018 with a simple goal: to make quality shopping easy, affordable, and accessible across Pakistan. What started as a small online store has now grown into a fast-expanding multi-category ecommerce platform serving thousands of customers nationwide. Today, Noor brings everything under one roof including clothing for men, women, and teens, jewelry, perfumes, shoes, bags, undergarments, and a wide range of lifestyle products. With strong focus on quality, variety, and customer trust, we work with reliable suppliers and brands to ensure value in every order. Backed by a growing logistics network, Noor delivers quickly and efficiently across Pakistan while continuously improving the shopping experience. Our vision is simple yet ambitious: to become one of South Asia’s most trusted and loved online marketplaces where customers can shop with confidence, convenience, and satisfaction.
                        </p>

                        {/* Stats */}
                        {/* <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="text-center">
                <span className="block text-xl sm:text-2xl md:text-3xl font-bold text-gold-light">500+</span>
                <span className="text-white/40 text-[10px] sm:text-xs md:text-sm">Top Brands</span>
              </div>
              <div className="text-center">
                <span className="block text-xl sm:text-2xl md:text-3xl font-bold text-gold-light">1M+</span>
                <span className="text-white/40 text-[10px] sm:text-xs md:text-sm">Happy Customers</span>
              </div>
              <div className="text-center">
                <span className="block text-xl sm:text-2xl md:text-3xl font-bold text-gold-light">50K+</span>
                <span className="text-white/40 text-[10px] sm:text-xs md:text-sm">Products</span>
              </div>
            </div> */}

                        {/* View More Link */}
                        {/* View More Link */}
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-gold-light hover:text-gold font-semibold text-sm md:text-base transition-colors group/link border-b-2 border-gold/50 hover:border-gold pb-1 w-fit"
                        >
                            View More
                            <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JourneySection;