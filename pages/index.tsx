import {Metadata} from "next";
import Content from './content.mdx'

export const metadata: Metadata = {
    title: 'Max Gerber',
    description: 'Max Gerber\'s personal website',
}

const Components = {
    h1: ({children, ...props}) => <h1 {...props}>{children}</h1>,
    h2: ({children, ...props}) => <h2 {...props}>{children}</h2>,
    h3: ({children, ...props}) => <h3 {...props}>{children}</h3>,
}

export default function Page() {
    return <div className="container"><Content components={Components}/></div>
}