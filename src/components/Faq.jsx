import React from 'react'

const Faq = () => {
    return (
        <>
            <div className="flex justify-center items-center">

                <div className="w-[90%] space-y-4">
                    <h2 className="text-4xl font-bold text-center mb-12 mt-10">FAQ-Frequently Asked Questions</h2>
                    <details
                        className="group border-s-4 border-gray-200 bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden"
                        open
                    >
                        <summary className="flex items-center justify-between gap-1.5 text-gray-900">
                            <h2 className="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

                            <svg
                                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>

                        <p className="pt-4 text-gray-900">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                            recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                            consequuntur distinctio corporis earum similique!
                        </p>
                    </details>

                    <details
                        className="group border-s-4 border-gray-200 bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary className="flex items-center justify-between gap-1.5 text-gray-900">
                            <h2 className="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

                            <svg
                                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>

                        <p className="pt-4 text-gray-900">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                            recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                            consequuntur distinctio corporis earum similique!
                        </p>
                    </details>

                    <details
                        className="group border-s-4 border-gray-200 bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary className="flex items-center justify-between gap-1.5 text-gray-900">
                            <h2 className="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

                            <svg
                                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>

                        <p className="pt-4 text-gray-900">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                            recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                            consequuntur distinctio corporis earum similique!
                        </p>
                    </details>
                </div>
            </div>
        </>
    )
}

export default Faq