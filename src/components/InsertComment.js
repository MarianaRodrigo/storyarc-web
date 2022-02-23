/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function InsertComment() {
  return (
    <div className="flex mx-4 w-full">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
        alt="Avatar of Jonathan Reinink"
      />
      <input
          type="text"
          placeholder="Escreve um comentário..."
          className="w-full py-2 px-5 bg-gray-200 rounded-full text-sm font-light tracking-wider outline-none"
        />
    </div>
  )
}
