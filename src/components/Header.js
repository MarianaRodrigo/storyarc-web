import Image from 'next/image'

function Header () {
    return (
        <header className="Sticky top-0 z-50 gird grid-cols-2 -md p-5 md:px-10 hidden:md-inline" >
            <div className="flex items-center space-x-4 justify-end">
                <Image className="h-6 w-6"
                    src='/images/logo.png' 
                    alt="Storyarc_logo" 
                    width="123"
                    height="29"
                    layout="fixed"
                    objectFit="containt"
                    objectPosition="Right"     
                /> 
            </div>
        </header>
    )
}

export default Header;