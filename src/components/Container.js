import React from 'react'
import Map from '../components/Map';

export default function Container ({children}) {
    return(
        <div>
            <div>
                { Map }
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}