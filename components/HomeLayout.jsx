import SideNav from "./Nav/SideNav"
import TopNav from "./Nav/TopNav"

function HomeLayout({ children }) {
    return (
        <div className="bg-primary-dark h-screen overflow-hidden text-primary-light grid grid-cols-12">
            <nav className='col-span-2 bg-secondary-dark'>
                <SideNav />
            </nav>
            <main className='col-span-8 p-8'>
                <header>
                    <TopNav />
                </header>
                {children}

            </main>
            <aside className='col-span-2 p-8 bg-secondary-dark'>

            </aside>
        </div>
    )
}

export default HomeLayout