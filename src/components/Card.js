

function Card() {
    return (
        <div className="max-w-md w-full lg:flex mt-20 ml-4 drop-shadow">
            <div className="h-48 lg:h-auto lg:w-52 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                <img src="./images/aveiro.jpeg"></img>
            </div>
            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-grey-dark flex justify-end mb-3">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                    </p>
                    <div className="text-black font-bold text-xl mb-2">Cais da Fonte Nova</div>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink" />
                    <div>
                        <p className="text-black text-sm leading-none mt-1">Rui Jorge</p>
                        <p className="text-gray-400 text-xs mt-1">Publicado há 2 dias</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;