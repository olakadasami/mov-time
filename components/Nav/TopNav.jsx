import Image from 'next/image'

import { TopNavItem } from './NavItem'
import logo from '../../assets/Logo/Logo.svg'
import logotext from '../../assets/Logo/LogoText.svg'

function TopNav({ showNav, toogleNavHandler }) {

    const items = [
        {
            title: "movies",
            href: "/"
        },
        {
            title: "Tv series",
            href: "/"
        },
        {
            title: "Kids",
            href: "/"
        },
    ]
    return (
        <header className="mb-4 ">

            <div className="flex md:hidden mb-4 justify-between items-center">
                <div className="flex gap-2 items-center">
                    <Image src={logo} alt='logo' />
                    <Image src={logotext} alt='logotext' />
                </div>
                <button onClick={toogleNavHandler} className="z-50 cursor-pointer">
                    {showNav ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            <ul className="flex items-center justify-center md:justify-start gap-4 capitalize">
                {items.map((item, index) => (
                    <TopNavItem key={index} item={item} />
                ))}
            </ul>

        </header>
    )
}

export default TopNav