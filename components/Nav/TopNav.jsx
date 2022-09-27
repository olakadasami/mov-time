import React from 'react'
import NavItem from './NavItem'

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
        <header>
            <ul className="flex items-center gap-4 capitalize">
                {items.map((item, index) => (
                    <NavItem key={index} item={item} />
                ))}
            </ul>
        </header>
    )
}

export default TopNav