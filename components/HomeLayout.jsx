import SideNav from "./Nav/SideNav"
import TopNav from "./Nav/TopNav"
import RightAside from "./RightSide/RightAside"

function HomeLayout({ children }) {
    return (
        <div className="bg-primary-dark h-screen overflow-hidden text-primary-light grid grid-cols-12">

            <SideNav />

            <main className='col-span-7 overflow-y-auto py-8 px-6'>
                <TopNav />

                {/* children refers to the individual pages/routes */}
                {children}
            </main>

            <RightAside />
        </div>
    )
}

export default HomeLayout