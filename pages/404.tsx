import {getLayout} from "@/components/Layout/Layout";
import Image from 'next/image'

const PageNotFound = () => {
    return (
        <div>
            Page Not Found
            <Image src='/vercel.svg' alt='' width={100} height={150} priority/>
        </div>
    )
}

PageNotFound.getLayout = getLayout
export default PageNotFound
