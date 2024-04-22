import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
                <div className="prose"></div>
            </div>
            <Footer />
        </>
    )
}

export default page