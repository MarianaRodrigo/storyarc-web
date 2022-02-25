import React from 'react'
import db from '../../db.json'
import Image from 'next/image'

export default function ProfileHeader() {
  const user = db.users[3]
  return (
    <div className="mt-6 h-64 flex bg-gradient-to-b from-current to-white relative">
      <Image className="opacity-50" src="/images/profile.png" layout="fill" />
      <div className="absolute w-24 h-24 top-[30%] left-8">
        <Image src={user.avatar} layout="fill" className="rounded-full" />
      </div>
    </div>
  )
}
