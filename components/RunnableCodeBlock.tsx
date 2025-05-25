'use client';

import { useState } from 'react';
import { CodeBlock, monoBlue as theme } from 'react-code-blocks';
import { useDebouncedState } from './useDebouncedState';
import styles from './RunnableCodeBlock.module.css';

type Props = {
    children: string;
    className?: string;
}

export function RunnableCodeBlock({ children, className }: Props) {
    const [isRunning, setIsRunning] = useDebouncedState(false, 100);
    const [output, setOutput] = useState<string>('');
    const [error, setError] = useState<string>('');

    const codeText = children.trim();


    const runCode = async () => {
        setIsRunning(true);

        try {
            // Create a function to capture console.log output
            const originalLog = console.log;
            const logs: string[] = [];
            console.log = (...args: any[]) => {
                logs.push(args.map(arg => String(arg)).join(' '));
            };

            // Execute the code using eval
            const result = await eval(`(async () => { ${children} })()`);
            
            // Restore console.log
            console.log = originalLog;

            setError('');
            // Set output
            if (logs.length > 0) {
                setOutput(logs.join('\n'));
            } else if (result !== undefined) {
                setOutput(String(result));
            } else {
                setOutput('Code executed successfully');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
            setOutput('');
        } finally {
            setIsRunning(false);
        }
    };

    const lang = className?.replace('language-', '') || 'javascript';

    return (
        <div className={styles.runnableCodeBlock}>
            <CodeBlock
                text={codeText}
                language={lang}
                showLineNumbers
                theme={theme}
            />
            <div className={styles.controls}>
                <button 
                    onClick={runCode}
                    disabled={isRunning}
                    className={styles.runButton}
                >
                    {isRunning ? 'Running...' : 'Run'}
                </button>
                {output && (
                    <div className={styles.output}>
                        {output}
                    </div>
                )}
                {error && (
                    <div className={styles.error}>
                        Error: {error}
                    </div>
                )}
            </div>
        </div>
    );
}