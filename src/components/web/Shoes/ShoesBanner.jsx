// components/ShoesBanner.jsx
import React from 'react';
import banner from '../../../assets/shoes/banner.png';

const ShoesBanner = () => {
    return (
        <div className="w-[98%] mx-auto">
            <div className="relative h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] overflow-hidden rounded-3xl group">
                {/* Single Image */}
                <img
                    src={banner}
                    alt="Shoes Collection"
                    className="w-full h-full object-cover"
                />

                {/* Green Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full px-8 md:px-12 lg:px-16">
                        <div className="max-w-lg">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-3 drop-shadow-lg">
                                Shoes Collection
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-white/80">
                                Step into style with our premium footwear collection
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoesBanner;