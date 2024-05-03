"use client"
import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-200">
            <button aria-label="Name"
                className="flex justify-between w-full p-4 text-left focus:outline-none"
                onClick={toggleAccordion}
            >
                <span className="font-medium">{question}</span>
                <span>{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
                <div className="p-4">{answer}</div>
            )}
        </div>
    );
};

export default FAQItem;
