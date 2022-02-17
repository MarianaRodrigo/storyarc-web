import Image from 'next/image'

function Header () {
    return (
       <div className="object-cover h-48 w-96">
           <Image 
            src='/images/logo.png' 
            alt="Storyarc Logo"
            width="123px"
            height="29px"
            layout="responsive" 
            priority
            />
       </div>
    )
}

export default Header;