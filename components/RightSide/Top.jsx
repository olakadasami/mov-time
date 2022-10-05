import Link from 'next/link'
import Image from 'next/image'

import search from '../../assets/Icons/search.svg'
import bell from '../../assets/Icons/bell.svg'
import avatar from '../../assets/Avatars/avataaars(5).svg'

function Top() {
    return (
        <div className="flex flex-wrap justify-center mb-8 items-center gap-x-4 gap-y-2">
            <Link href="/">
                <Image src={search} alt='search' />
            </Link>
            <Link href="/">
                <Image src={bell} alt='notification' />
            </Link>
            <div className="w-7">
                <Image src={avatar} alt="avatar" />
            </div>
            <p className="d">
                Olakadasami
            </p>
        </div>
    )
}

export default Top