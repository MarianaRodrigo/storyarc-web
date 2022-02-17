function Card() {
    return (
        <div className="pr-4 mx-4 mt-10 bg-white shadow-xl flex border rounded-lg">

            <div className="basis-2/5 rounded-l-lg" style={{ backgroundImage: 'url(./images/aveiro.jpeg)', backgroundSize: '130%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>

            </div>
            <div className="basis-3/5 py-3">
                <div className="flex space-between">
                    <h1 className="flex flex-grow pl-3 font-medium">Universidade de Aveiro</h1>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                </div>
                <div className="flex items-center pt-5 pl-3">
                    <img className="w-9 h-9 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Rui Jorge" />
                    <div>
                        <p className="text-black text-sm leading-none mt-1">Rui Jorge</p>
                        <p className="text-gray-400 text-xs mt-1">Publicado há 2 dias</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Card;