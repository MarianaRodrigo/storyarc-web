function PostHeader() {
    return (
        <div className="mx-4 my-6 flex-1">
            <div className="flex items-center pb-4">
                <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink" />
                <div className="text-sm">
                    <p className="text-normal font-medium tracking-wide leading-none">Rui Jorge</p>
                    <p className="text-xs font-light tracking-wide">Publicado há x dias</p>
                </div>
            </div>
            <p className="font-normal text-sm pb-2">Escola Secundária José Estevão</p>
            <img src="https://pbs.twimg.com/media/FLLvDlgWQAgXoqc?format=jpg&name=900x900" />
        </div>
    )
}

export default PostHeader;