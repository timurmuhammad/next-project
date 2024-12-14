'use client';

import styles from './header.module.scss';
import { Logo } from '@/ui/logo';
import { TranslatedLink } from '@/components/translatedLink';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import burgerClose from '@/ui/icons/burger_close.svg';
import burgerOpen from '@/ui/icons/burger_open.svg';
import { Languages } from '../languages';
import { SocialMedia } from '@/ui/socialMedia';

export const Header = () => {
    const [locale, setLocale] = useState(localStorage.getItem('locale') || 'EN');
    const [burgerActive, setBurgerActive] = useState(false);
    const lineRef = useRef(null);
    const workerRef = useRef(null);

    useEffect(() => {
        const prevLocale = localStorage.getItem('prevLocale') || 'EN';

        if (prevLocale === locale) return;

        // Логика Worker в строке
        const workerCode = `
            self.onmessage = (event) => {
                const { screenWidth, duration, fps } = event.data;

                const frameTime = 1000 / fps; // Интервал между кадрами
                const totalFrames = Math.round(duration / frameTime); // Количество кадров
                const step = (screenWidth * 2) / totalFrames; // Изменение позиции за кадр

                let x = -screenWidth; // Начальная позиция
                let frame = 0;

                const interval = setInterval(() => {
                    if (frame >= totalFrames) {
                        clearInterval(interval);
                        self.postMessage({ done: true, x: screenWidth * 2 });
                    } else {
                        x += step;
                        self.postMessage({ x });
                        frame++;
                    }
                }, frameTime);
            };
        `;

        // Создание Worker из строки
        const blob = new Blob([workerCode], { type: 'application/javascript' });
        workerRef.current = new Worker(URL.createObjectURL(blob));

        const screenWidth = window.innerWidth;

        workerRef.current.postMessage({
            screenWidth,
            duration: 1000,
            fps: 50,
        });

        workerRef.current.onmessage = (event) => {
            const { x, done } = event.data;

            if (lineRef.current) {
                lineRef.current.style.transform = `translateX(${x}px)`;
                lineRef.current.style.opacity = 1;
            }

            if (done) {
                localStorage.setItem('prevLocale', locale);
                workerRef.current.terminate();
                workerRef.current = null;
            }
        };

        return () => {
            if (workerRef.current) {
                workerRef.current.terminate();
                workerRef.current = null;
            }
        };
    }, [locale]);

    const toggleBurgerMenu = () => {
        setBurgerActive(!burgerActive);
        document.body.style.overflow = burgerActive ? 'unset' : 'hidden';
    };

    return (
        <div className={styles.body}>
            <div className={styles.container + ' _container'}>
                <div className={styles.burger} onClick={toggleBurgerMenu}>
                    {burgerActive ? (
                        <Image src={burgerClose} alt="icon" width={24} height={24} />
                    ) : (
                        <Image src={burgerOpen} alt="icon" width={24} height={24} />
                    )}
                </div>

                <Logo />

                <div className={styles.auth}>
                    <TranslatedLink href="/login">Login</TranslatedLink>
                    <TranslatedLink href="/registration">Sign Up</TranslatedLink>
                </div>
            </div>

            <div className={styles.progress}>
                <div
                    ref={lineRef}
                    style={{
                        width: '100vw',
                        transform: 'translateX(-100vw)',
                        opacity: 0,
                    }}
                    className={styles.line}
                ></div>
            </div>
        </div>
    );
};
