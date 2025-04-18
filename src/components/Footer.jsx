import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-black text-white py-10 mt-16">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start">

                        {/* Logo & Name */}
                        <div className="flex items-center mb-6 md:mb-0">
                            {/* Replace src with your actual logo */}
                            <img src="./images/icon.png" alt="Scribbly Logo" className="h-10 w-10 mr-3 rounded" />
                            <span className="text-2xl font-bold tracking-wide">Scribbly</span>
                        </div>

                        {/* Footer Links */}
                        <div className="flex flex-col sm:flex-row gap-6 text-center sm:text-left">
                            <a href="#" className="hover:text-gray-400 transition">About Us</a>
                            <a href="#" className="hover:text-gray-400 transition">Privacy Policy</a>
                            <a href="#" className="hover:text-gray-400 transition">Terms & Conditions</a>
                            <a href="#" className="hover:text-gray-400 transition">Contact</a>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-sm text-gray-500">
                        © 2025 Scribbly. All rights reserved.
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer