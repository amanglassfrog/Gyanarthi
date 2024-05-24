// components/FloatingIcons.js
import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const FloatingIcons = () => {
    return (
        <div className="fixed bottom-4 right-4 flex flex-col space-y-3">
            <a
                href="tel:+918755552552"
                className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
                aria-label="Call"
            >
                <FaPhoneAlt size={24} />
            </a>
            <a
                href="//api.whatsapp.com/send?phone=+918755552552&text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 mobile hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
                aria-label="WhatsApp"
            >
                <FaWhatsapp size={24} />
            </a>
            <a
                href="https://web.whatsapp.com/send?phone=+918755552552&text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 desktop hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
                aria-label="WhatsApp"
            >
                <FaWhatsapp size={24} />
            </a>
        </div>
    );
};

export default FloatingIcons;
