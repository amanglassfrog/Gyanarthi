import React from 'react'


const Main = () => {
    return (
        <section className="bg-cover bg-center h-screen flex items-center imgbc" >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 md:pr-4 flex flex-col justify-center">
                        <h2 className="text-4xl font-bold text-white mb-4">Empowering Minds to Shape a Better Tomorrow</h2>
                        <p className="text-white mb-4">Gyanarthi Media College, Kashipur, affiliated with the Kumaun University, is one of the best colleges in town with diversified faculty and industry specific courses in media, fashion, and commerce.</p>
                    </div>
                    <div className="md:w-1/2 md:pl-4">
                        <div className="bgform p-8 rounded-md shadow-md flex items-center justify-center flex-col">
                            <h3 className="text-2xl font-bold mb-4 text-white">GYANARTHI APPLICATION FORM 2024</h3>
                            <p className="mb-4 hometext">Apply for Gyanarthi 2024 - ( Phase- 1)</p>
                            <div className="bg-red-500 text-white p-4 mb-4 rounded-md">
                                Registration End Date: Date, 2024
                            </div>
                            <form>
                                <div className="mb-4">
                                    <div className="flex mb-2">
                                        <div className="w-1/2 pr-2">
                                            <input type="text" className="w-full p-2 border rounded-md" placeholder="First Name" />
                                        </div>
                                        <div className="w-1/2 pl-2">
                                            <input type="text" className="w-full p-2 border rounded-md" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="flex mb-2">
                                        <div className="w-1/2 pr-2">
                                            <input type="email" className="w-full p-2 border rounded-md" placeholder="Email" />
                                        </div>
                                        <div className="w-1/2 pl-2">
                                            <input type="tel" className="w-full p-2 border rounded-md" placeholder="Phone" />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-left mb-2 text-white">Choose your program:</p>
                                <div className="mb-4">
                                    <div className="flex mb-2">
                                        <div className="w-1/2 pr-2">
                                            <input type="text" className="w-full p-2 border rounded-md" placeholder="Program 1" />
                                        </div>
                                        <div className="w-1/2 pl-2">
                                            <input type="text" className="w-full p-2 border rounded-md" placeholder="Program 2" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="flex mb-2">
                                        <div className="w-1/3 pr-2">
                                            <input type="text" className="w-full p-2 border rounded-md" placeholder="Day" />
                                        </div>
                                        <div className="w-1/3 px-2">
                                            <input type="text" className="w-full p-2 border rounded-md" placeholder="Month" />
                                        </div>
                                        <div className="w-1/3 pl-2">
                                            <input type="text" className="w-full p-2 border rounded-md" placeholder="Year" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <button className="homebutton text-white px-4 py-2 rounded-md w-full">SEND OTP TO REGISTER</button>
                                    <button className=" homebutton text-white px-4 py-2 rounded-md w-full">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main