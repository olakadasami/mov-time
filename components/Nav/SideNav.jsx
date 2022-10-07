import Image from 'next/image'

import NavItem from './NavItem'
import Top from '../RightSide/Top'

import logo from '../../assets/Logo/Logo.svg'
import logotext from '../../assets/Logo/LogoText.svg'

import { BiMoviePlay } from 'react-icons/bi'
import { FaCalendarAlt, FaUsers, FaSignOutAlt, FaCompass } from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'
import { RiSettingsFill } from 'react-icons/ri'



export default function SideNav() {

    const menuItems = [
        {
            title: "Browse",
            href: "/",
            icon: <FaCompass size={22} />
        },
        {
            title: "Watchlist",
            href: "/",
            icon: <BiMoviePlay size={22} />
        },
        {
            title: "Coming Soon",
            href: "/",
            icon: <FaCalendarAlt size={22} />
        },
    ]

    const socialItems = [
        {
            title: "Friends",
            href: "/",
            icon: <BsFillPeopleFill size={22} />
        },
        {
            title: "Parties",
            href: "/",
            icon: <FaUsers size={22} />
        }
    ]

    const userItems = [
        {
            title: "Settings",
            href: "/",
            icon: <RiSettingsFill size={22} />
        },
        {
            title: "Log out",
            href: "/",
            icon: <FaSignOutAlt size={22} />
        }
    ]
    return (
        <>
            <div className="flex gap-2 p-6 xl:mb-6 items-center">
                <Image src={logo} alt='logo' />
                <Image src={logotext} alt='logotext' />
            </div>

            <div className="xl:hidden px-4">
                <Top />
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