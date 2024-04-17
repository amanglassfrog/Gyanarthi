"use client"
import React from 'react'
import Image from 'next/image';
import chancelor1 from '../../../public/chancelor1.png';
import Header from '../Header/Header';
import { useState } from 'react';
import addicon from "../../../public/addicon.png"


const Page = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedFaculty, setSelectedFaculty] = useState(null);

    const faculties = [
        {
            id: 1, name: 'John Doe', department: 'Computer Science', imageUrl: chancelor1, description: "Our Faculty comprising leading academicians, industry experts & entrepreneurs, have been drawn from around the world. Students can expect not just the latest research knowledge but also mentorship through the various stages of learning. Through a judicious mix of resident and visiting faculty, Woxsen brings together the best knowledge applicable to both the Indian and global contexts.Our Faculty comprising leading academicians, industry experts & entrepreneurs, have been drawn from around the world.Students can expect not just the latest research knowledge but also mentorship through the various stages of learning. Through a judicious mix of resident and visiting faculty, Woxsen brings together the best knowledge applicable to both the Indian and global contexts."
        },
        { id: 2, name: 'Jane Smith', department: 'Mathematics', imageUrl: chancelor1 },
        { id: 3, name: 'Michael Johnson', department: 'Physics', imageUrl: chancelor1 },
        { id: 1, name: 'John Doe', department: 'Computer Science', imageUrl: chancelor1 },
        { id: 2, name: 'Jane Smith', department: 'Mathematics', imageUrl: chancelor1 },
        { id: 3, name: 'Michael Johnson', department: 'Physics', imageUrl: chancelor1 },
        { id: 1, name: 'John Doe', department: 'Computer Science', imageUrl: chancelor1 },
        { id: 2, name: 'Jane Smith', department: 'Mathematics', imageUrl: chancelor1 },
        { id: 3, name: 'Michael Johnson', department: 'Physics', imageUrl: chancelor1 },
        // Add more faculty objects as needed
    ];

    const openModal = (faculty) => {
        setSelectedFaculty(faculty);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <>
            <Header />
            <div className="flex flex-wrap py-8 px-24">
                <div className="w-full md:w-1/2  p-4">
                    <h2 className="text-xl font-bold chancelorheading">Bachelors Of
                        Fine Arts</h2>
                    <p className="mt-2 chancelorparagraph">
                        Session Starts – August 2024Duration – 4 YearsResidential Degree ProgramApplications Deadline: 24th March, 2024
                    </p>
                </div>
                <div className="w-full md:w-1/2 p-4">

                    <Image src={chancelor1} alt="Image Description"
                        className="max-w-full h-auto" />

                </div>
            </div>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {faculties.map((faculty) => (
                        <div key={faculty.id} className="relative">
                            <div className="flex justify-end absolute top-0 right-0 m-2">
                                <button onClick={() => openModal(faculty)}>
                                    {/* <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m-4-4h8"></path>
                                    </svg> */}
                                    <Image src={addicon} height={20} width={20} />
                                </button>
                            </div>
                            <div className="bg-white ">
                                <Image src={faculty.imageUrl} alt={faculty.name} className="w-full h-40 object-cover facultyimage mb-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">{faculty.name}</h3>
                                    <p className="text-gray-500">{faculty.department}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {showModal && (
                    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-75 z-50">
                        <div className="bg-white p-8 rounded-lg shadow-md flex justify-center items-center space-x-8">
                            <img src={selectedFaculty.imageUrl.src} alt={selectedFaculty.name} className="w-48 h-48 object-cover rounded-lg" />
                            <div>
                                <h2 className="text-2xl font-semibold">{selectedFaculty.name}</h2>
                                <p className="text-gray-500">{selectedFaculty.department}</p>
                                <p className="text-gray-500">{selectedFaculty.description}</p>

                                {/* Add more faculty information here */}
                            </div>
                            <button onClick={closeModal} className="text-red-500 hover:text-red-600 focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default Page