import {Metadata} from "next";
import Content from './content.mdx'

export const metadata: Metadata = {
    title: 'Max Gerber',
    description: 'Max Gerber\'s personal website',
}

export default function Page() {
    return <div className="container"><Content/></div>
}