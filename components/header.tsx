import { useState } from 'react';
import styles from './header.module.css';

interface HeaderProps {
  id: string;
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Header: React.FC<HeaderProps> = ({ children, id, as: Component = 'h2' }) => {
  const [showLink, setShowLink] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  if (!id) return <Component>{children}</Component>;

  const handleClick = async () => {
    const url = `${window.location.href.split('#')[0]}#${id}`;
    await navigator.clipboard.writeText(url);

    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
      setShowLink(false);
    }, 500);
  };

  return (
    <Component
      id={id}
      className={styles.header}
      onClick={handleClick}
      onMouseEnter={() => setShowLink(true)}
      onMouseLeave={() => setShowLink(false)}
    >
      {children}
      <span className={styles.icon}>{id && showCopied ? '✅' : showLink ? '🔗' : null}</span>
    </Component>
  );
};
