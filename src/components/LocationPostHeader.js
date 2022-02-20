import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function LocationPostHeader({location}) {
    return (
        <div className="mx-4 my-6 leading-loose">
            <h1 className="text-base font-light tracking-wide pb-2">Publicações em</h1>
            <div className="flex">
                <FontAwesomeIcon className="w-5" icon={faLocationDot} />
                <h1 className="text-xl tracking-wide font-medium px-2">{location}</h1>
            </div>
        </div>
    )
}

export default LocationPostHeader;