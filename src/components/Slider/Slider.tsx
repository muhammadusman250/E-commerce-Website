"use client";

import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const Slider = () => {
    const images = [
        { url: "/01.jpg" },
        { url: "/02.jpg" },
        { url: "/03.jpg" },
    ];

    return (
        <div className="w-full max-w-3xl justify-items-center">
            <SimpleImageSlider
                width="100%"
                height="400px"
                images={images}
                showBullets={false}
                showNavs={true}
                style={{objectFit: "contain" }}
            />
        </div>
    );
};

export default Slider;
