'use client'; // Ensure this is a client-side component

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToContent = () => {
  const pathname = usePathname();
  
  useEffect(() => {
    const hash = window.location.hash;
    
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]); // Use pathname to trigger effect on route changes

  return null;
};

export default ScrollToContent;
