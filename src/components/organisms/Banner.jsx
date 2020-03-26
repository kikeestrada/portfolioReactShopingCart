import React from 'react';

const Banner = () =>(
    <div className="main-banner img-container diagonal l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" src="img/banner-img.png" alt="alt-Banner"/>
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">Shopping Card Emulator</p>
                    <p>New fashion trends</p>
                    <input className="nav-input" type="text" placeholder="Explore Products"/>
                </div>
            </div>
        </div>
    </div>
);

export default Banner;
