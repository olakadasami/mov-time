import Image from 'next/image'

import NavItem from './NavItem'

import logo from '../../assets/Logo/Logo.svg'
import logotext from '../../assets/Logo/LogoText.svg'

import browse from '../../assets/Icons/discover.svg'
import watchlist from '../../assets/Icons/video-play.svg'
import calendar from '../../assets/Icons/calendar.svg'
import parties from '../../assets/Icons/people.svg'
import friends from '../../assets/Icons/profile-2user.svg'
import setting from '../../assets/Icons/setting.svg'
import logout from '../../assets/Icons/logout.svg'



export default function SideNav() {

    const menuItems = [
        {
            title: "Browse",
            href: "/",
            icon: browse
        },
        {
            title: "Watchlist",
            href: "/",
            icon: watchlist
        },
        {
            title: "Coming Soon",
            href: "/",
            icon: calendar
        },
    ]

    const socialItems = [
        {
            title: "Friends",
            href: "/",
            icon: friends
        },
        {
            title: "Parties",
            href: "/",
            icon: parties
        }
    ]

    const userItems = [
        {
            title: "Settings",
            href: "/",
            icon: setting
        },
        {
            title: "Log out",
            href: "/",
            icon: logout
        }
    ]
    return (
        <>
            <div className="flex gap-2 p-6 mb-10 items-center">
                <Image src={logo} alt='logo' />
                <Image src={logotext} alt='logotext' />
            </div>

            <div className="flex flex-col gap-10">
                <ListItems heading='Menu' items={menuItems} />
                <ListItems heading='social' items={socialItems} />
                <ListItems heading='user' items={userItems} />
            </div>
        </>
    )
}


function ListItems({ items, heading }) {
    return (
        <div>
            <h3 className='px-6 text-sm uppercase mb-4 text-gray-500'>
                {heading}
            </h3>
            <ul className="flex flex-col gap-5">
                {items.map((item, index) => (
                    <NavItem style='border-l-4 border-secondary-dark pl-4 duration-300 active:border-color-red hover:border-color-red' item={item} key={index} />
                ))}
            </ul>
        </div>
    )
}