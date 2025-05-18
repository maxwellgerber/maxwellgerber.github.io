import {CodeBlock, atomOneLight} from 'react-code-blocks';
import styles from './codeblock.module.css'

export function Codeblock({children, className}) {
    if(!children.includes('\n')) {
        return <code className={styles.inline}>{children}</code>
    }
    className = className || 'language-javascript';
    return (
        <div className={styles.codeblock}>
            <CodeBlock
                text={children.trim()}
                language={className.replace('language-', '')}
                showLineNumbers
                theme={atomOneLight}
            />
        </div>
    );
}