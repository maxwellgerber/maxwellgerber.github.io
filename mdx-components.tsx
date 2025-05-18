import type { MDXComponents } from 'mdx/types'
import {Codeblock} from "@/components/codeblock";
import {Header} from "@/components/header";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, ...props }) => <a target="_blank" {...props}>{children}</a>,
    code: Codeblock,

    h1: (props) => <Header as="h1" {...props} />,
    h2: (props) => <Header as="h2" {...props} />,
    h3: (props) => <Header as="h3" {...props} />,
    h4: (props) => <Header as="h4" {...props} />,
    h5: (props) => <Header as="h5" {...props} />,
    h6: (props) => <Header as="h6" {...props} />,
    ...components,
  }
}