import React from 'react'
import mapbox from '../components/Map';

export default function Container ({children}) {
    return(
        <div>
            <div>
                { mapbox }
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}