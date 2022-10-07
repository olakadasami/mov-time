import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavItem({ item, style }) {
    return (
        <li className={`flex gap-3 hover:text-color-white text-primary-light cursor-pointer items-center ${style}`}>
            <div>
                {item.icon}
            </div>
            <Link href={item.href}>
                {item.title}
            </Link>
        </li>
    )
}

export function TopNavItem({ item, style }) {
    return (
        <li className={`flex gap-3 cursor-pointer items-center ${style}`}>
            <Link href={item.href}>
                {item.title}
            </Link>
        </li>
    )
}

