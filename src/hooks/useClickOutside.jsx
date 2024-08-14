'use client'

import { useEffect } from 'react'

export function useClickOutside(ref, callback, callback1, ref1) {

    const handleClick = (e) => {
        if (ref.current) {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            } else if (callback1) {
                if (ref1) {
                    if (ref1.current && ref1.current.contains(e.target)) {
                        callback1();
                    }
                } else {
                    callback1();
                }
            }
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    })
}
