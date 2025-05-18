import type { MDXComponents } from 'mdx/types'
import {Codeblock} from "@/components/codeblock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, ...props }) => <a target="_blank" {...props}>{children}</a>,
    code: Codeblock,
    ...components,
  }
}