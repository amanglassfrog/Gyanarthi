// Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-900 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* First Column */}
                <div className="text-white">
                    <div className="mb-4">Explore. Discover. Connect.</div>
                    <div className="flex mb-4">
                        <span className="mr-4 text-xl">
                            <i className="fab fa-facebook"></i>
                        </span>
                        <span className="mr-4 text-xl">
                            <i className="fab fa-twitter"></i>
                        </span>
                        <span className="text-xl">
                            <i className="fab fa-instagram"></i>
                        </span>
                    </div>
                    <div className="flex">
                        <span className="mr-4 text-xl">
                            <i className="fab fa-linkedin"></i>
                        </span>
                        <span className="mr-4 text-xl">
                            <i className="fab fa-youtube"></i>
                        </span>
                        <span className="text-xl">
                            <i className="fab fa-pinterest"></i>
                        </span>
                    </div>
                    <div className="mt-4">@Copyright - Gyanarthi College</div>
                </div>

                {/* Second Column */}
                <div className="text-white">
                    <h4 className="font-semibold mb-2">About Us</h4>
                    <ul>
                        <li>About 1</li>
                        <li>About 2</li>
                        <li>About 3</li>
                        <li>About 4</li>
                        <li>About 5</li>
                    </ul>
                </div>

                {/* Third Column */}
                <div className="text-white">
                    <h4 className="font-semibold mb-2">About Us</h4>
                    <ul>
                        <li>About 1</li>
                        <li>About 2</li>
                        <li>About 3</li>
                        <li>About 4</li>
                        <li>About 5</li>
                    </ul>
                </div>

                {/* Fourth Column */}
                <div className="text-white">
                    <div className="mb-4">10 menu items in footer</div>
                    {/* Add your 10 menu items here */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
