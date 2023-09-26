import { useEffect, useState } from 'react';
import { MAX_MOBILE_SCREEN_WIDTH } from '../constants';

export default function () {
    const [isMobile, setIsMobile] = useState<boolean>();

    useEffect(() => {    
        setIsMobile(window.innerWidth < MAX_MOBILE_SCREEN_WIDTH);
        window.addEventListener("resize", () => {
            if (window.innerWidth > MAX_MOBILE_SCREEN_WIDTH) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
          });
        return () => window.removeEventListener("resize", () => {
            if (window.innerWidth > MAX_MOBILE_SCREEN_WIDTH) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
          });
      }, []);

      return {
          isMobile,
      };
};