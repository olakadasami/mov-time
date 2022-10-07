import { useState } from "react"
import SideNav from "./Nav/SideNav"
import TopNav from "./Nav/TopNav"
import RightAside from "./RightSide/RightAside"

function HomeLayout({ children }) {

    // local state of the mobile nav
    const [showNav, setShowNav] = useState(false)

    // Function to toogle the mobile navigation
    const toogleNavHandler = () => {
        setShowNav(!showNav)
    }

    // Home layout is the container component
    return (
        <div className="bg-primary-dark h-screen overflow-hidden text-primary-light flex">
            {/* Side Nav */}
            <nav className={`md:w-3/12 xl:w-2/12 h-full lg:px-6 hidden md:block bg-secondary-dark text-secondary-light`}>
                <SideNav />
            </nav>

            {/* Mobile Nav */}
            <nav className={`w-[250px] h-full pt-2 absolute top-0 z-50 ${showNav ? "left-0" : "-left-full"} transition-all ease-in-out duration-300 md:hidden bg-secondary-dark text-secondary-light`}>
                <SideNav />
            </nav>

            <main className='h-full w-full md:w-9/12 xl:w-7/12 relative overflow-y-auto p-4 sm:px-8 py-8 md:px-6'>
                <TopNav showNav={showNav} toogleNavHandler={toogleNavHandler} />
                {/* children refers to the individual pages/routes */}
                {children}
            </main>

            <aside className="h-full hidden xl:block xl:w-3/12 py-8 px-6 bg-secondary-dark">
                <RightAside />
            </aside>
        </div>
    )
}

export default HomeLayout