import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ProfileDescription from '../components/ProfileDescription'
import db from '../../db.json'
import Image from 'next/image'

export default function profile() {
    return (
        <div className="flex-1">
            <ProfileHeader />
            <ProfileDescription /> 
        </div>
    )
}
