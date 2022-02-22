import React from 'react'

export default function PostActions() {
    return (
        <div className="border-t border-b border-gray-300 mx-4 my-6">
            <div className="my-4 flex justify-center">
                <div className="flex">
                    <svg
                        className="w-6 h-6 flex-none"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        ></path>
                    </svg>
                    <p className="ml-2 text-gray-500 font-medium">Guardar</p>
                </div>
            </div>
        </div>
    )
}
