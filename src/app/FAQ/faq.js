// pages/faq.js
import React from 'react';
import FAQSection from '../FAQ/FAQSection';

const FAQPage = () => {
    const faqs = [
        {
            question: 'How do I shortlist the best NDA Coaching in Dehradun? ',
            answer: 'To shortlist the best NDA Coaching in Dehradun, a student must focus on the kind of curriculum offered, faculty experience, performance of students, and facilities offered. ',
        },
        {
            question: 'What are the best Dehradun NDA Coaching options that I can apply for? ',
            answer: 'For NDA Coaching, students can apply for either the NDA Foundation Course or the NDA Course at Ranbhoomi Training Academy RANTRA and gain the right educative approach for clearing the National Defence Academy Entrance Examination. ',
        },
        {
            question: 'What type of faculty should I expect at one of the best NDA, CDS, and other Defence Examination Centres in Dehradun? ',
            answer: 'Students should look out for experienced teachers for every subject and very army-related guidance as they look out for the perfect faculty at one of the best NDA, CDS, and other Defence Examination Centres in Dehradun. ',
        }, {
            question: 'What courses can I find at the Dehradun coaching centres of the NDA Exam?  ',
            answer: 'Students can check out the NDA Foundation Course, NDA Course, CDS Course, AFCAT Course, and Navy (AA/SSR) Preparation Courses at the Dehradun coaching centres of the NDA Exam. ',
        },
        {
            question: 'What Course is best for me at Dehradun NDA Coaching?   ',
            answer: 'You can choose the NDA Foundation Course if you are a student of Class 11 or 12 and want to prepare for the National Defence Academy Examination. However, if you have passed Class 12, the NDA Course is the perfect preparation course for you.',
        },
        // Add more FAQ items as needed
    ];

    return (
        <div className="container mx-auto">
            <FAQSection faqs={faqs} />
        </div>
    );
};

export default FAQPage;
