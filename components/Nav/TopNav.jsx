import NavItem from './NavItem'
import logo from '../../assets/Logo/Logo.svg'
import Image from 'next/image'

function TopNav() {

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
        <header className="mb-4 flex text-sm sm:text-base justify-between items-center">

            <div className="md:hidden">
                <Image src={logo} width={28} alt='logo' />
            </div>

            <ul className="flex items-center gap-2 sm:gap-4 capitalize">
                {items.map((item, index) => (
                    <NavItem key={index} item={item} />
                ))}
            </ul>

            <div className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </div>
        </header>
    )
}

export default TopNav