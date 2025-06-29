import React, { useEffect, useState } from "react";
export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({ height: window.innerHeight, width: window.innerWidth })
    useEffect(() => {
        window.addEventListener('resize', () => { setWindowSize({ height: window.innerHeight, width: window.innerWidth }) })
        return () => {
            window.removeEventListener('resize', () => { setWindowSize({ height: window.innerHeight, width: window.innerWidth }) })
        }
    }, []);

    return { windowSize }
}