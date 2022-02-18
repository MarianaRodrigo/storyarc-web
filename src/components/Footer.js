import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div className="relative">
            <div className="fixed bottom-0 insert-x-0 py-4 flex px-4">
                <FontAwesomeIcon className="w-5" icon={faUser} />
                <h1 className="ml-2 mt-1 font-normal">Iniciar Sessão</h1>
            </div>
        </div>
    );
}

export default Footer;