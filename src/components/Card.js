

function Card() {
    return (
<<<<<<< HEAD
        <div className="max-w-md w-full lg:flex mt-20 ml-4 drop-shadow">
            <div className="h-48 lg:h-auto lg:w-52 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <img src="./images/aveiro.jpeg"></img>
=======
        <div>
            <div className="max-w-md w-full lg:flex mt-20 ml-4 drop-shadow">
                <div className="h-48 lg:h-auto lg:w-52 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                    <img src="./images/aveiro.jpeg"></img>
                </div>
                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <p className="text-sm text-grey-dark flex justify-end mb-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                        </p>
                        <div className="text-black font-bold text-xl mb-2">Cais da Fonte Nova</div>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Rui Jorge" />
                        <div>
                            <p className="text-black text-sm leading-none mt-1">Rui Jorge</p>
                            <p className="text-gray-400 text-xs mt-1">Publicado há 2 dias</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-md w-full lg:flex mt-20 ml-4 drop-shadow">
                <div className="h-48 lg:h-auto lg:w-52 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                    <img src="https://www.eurodicas.com.br/wp-content/uploads/2021/07/universidade-de-aveiro-1200x675.jpg"></img>
                </div>
                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <p className="text-sm text-grey-dark flex justify-end mb-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                        </p>
                        <div className="text-black font-bold text-xl mb-2">Universidade de Aveiro</div>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/79.jpg" alt="Avatar of Paula Cardoso"/>
                        <div>
                            <p className="text-black text-sm leading-none mt-1">Paula Cardoso</p>
                            <p className="text-gray-400 text-xs mt-1">Publicado há 3 dias</p>
                        </div>
                    </div>
                </div>
>>>>>>> c0591cd400dfacd5393630aaf72b0bf0c1074f71
            </div>

            <div className="max-w-md w-full lg:flex mt-20 ml-4 drop-shadow">
                <div className="h-48 lg:h-auto lg:w-52 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                    <img src="https://www.teatroaveirense.pt/imagens/noticias/teatro_aveirense_reabre_portas6130b0e8279dc.jpg"></img>
                </div>
                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <p className="text-sm text-grey-dark flex justify-end mb-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                        </p>
                        <div className="text-black font-bold text-xl mb-2">Teatro Aveirense</div>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/8.jpg" alt="Avatar of Carlos Maior" />
                        <div>
                            <p className="text-black text-sm leading-none mt-1">Carlos Maior</p>
                            <p className="text-gray-400 text-xs mt-1">Publicado há 5 dias</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;