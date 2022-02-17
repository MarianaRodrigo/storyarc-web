import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

function SubHeader() {
    return (
        <div className="flex mt-10 mx-4">
            <div className="flex flex-grow">
                <FontAwesomeIcon className="w-5" icon={faLocationDot} />
                <h1 className="ml-2 mt-1">Universidade de Aveiro</h1>
            </div>
            <div className="flex">
                <FontAwesomeIcon className="w-8" style={{color: '#37b780'}} icon={faCirclePlus} />
            </div>
        </div>
    )
}

export default SubHeader;