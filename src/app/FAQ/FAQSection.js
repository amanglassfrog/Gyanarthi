import React from 'react';
import FAQItem from './FAQItem';

const FAQSection = ({ faqs }) => {
    return (
        <section className="mt-8  py-8 px-8 w-full">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div>
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
