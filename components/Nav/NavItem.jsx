import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavItem({ item, style }) {
    return (
        <li className={`flex gap-3 cursor-pointer items-center ${style}`}>
            <Image src={item.icon} alt={item.title} />
            <Link href={item.href}>
                {item.title}
            </Link>
        </li>
    )
}

export default NavItem