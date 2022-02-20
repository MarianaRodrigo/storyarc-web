import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function SubHeader() {
  return (
    <div className="flex mx-4 justify-between items-center my-6">
      <div className="flex flex-grow items-center">
        {/* <FontAwesomeIcon className="w-6 h-7" icon={faLocationDot} /> */}
        <h1 className=" text-xl font-normal tracking-wide">
          Conteúdos Recentes
        </h1>
      </div>
      <FontAwesomeIcon
        className="w-8"
        style={{ color: "#37b780" }}
        icon={faCirclePlus}
      />
    </div>
  );
}

export default SubHeader;
