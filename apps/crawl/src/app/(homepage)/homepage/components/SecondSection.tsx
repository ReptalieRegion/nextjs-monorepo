'use client';
import { useEffect, useRef } from 'react';

export default function SecondSection() {
    const targetElementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const targetElement = targetElementRef.current;

            if (targetElement) {
                const elementRect = targetElement?.getBoundingClientRect();
                const scrollTop = window.scrollY || document.documentElement.scrollTop;

                const isOverScroll = elementRect.top < scrollTop;

                if (isOverScroll) {
                    const header = document.getElementById('header');
                    header?.classList.add('p-header__dark', 'p-header__border');
                } else {
                    const header = document.getElementById('header');
                    header?.classList.remove('p-header__dark', 'p-header__border');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="second-section" className="second-section">
            <p ref={targetElementRef} className="second-section-font">
                내 희귀동물들을 한눈에 모아보고 한 곳에서 관리하세요.
                <br />
                쉽고 간편하게 다이어리를 관리하고 일상을 공유,
                <br />
                크롤과 함께해요
            </p>
        </section>
    );
}
