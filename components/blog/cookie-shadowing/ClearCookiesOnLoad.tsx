import { useEffect } from 'react';

export function ClearCookiesOnLoad() {
  useEffect(() => {
    // Clear cookies by setting them to expire in the past
    const expireDate = 'Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = `my_cool_cookie=; expires=${expireDate}`;
    document.cookie = `my_cool_cookie=; path=/blog/cookie-shadowing; expires=${expireDate}`;
    document.cookie = `my_cool_cookie=; domain=${window.location.hostname}; expires=${expireDate}`;
    document.cookie = `my_cool_cookie=; path=/blog/cookie-shadowing; domain=${window.location.hostname}; expires=${expireDate}`;
  }, []);
  return null; // This component doesn't render anything
}
