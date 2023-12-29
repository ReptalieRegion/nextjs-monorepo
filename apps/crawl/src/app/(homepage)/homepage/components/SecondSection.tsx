'use client';
import { useEffect, useRef } from 'react';

export default function SecondSection() {
    const secondSectionRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (secondSectionRef.current) {
            const observer = new IntersectionObserver(([e]) => {
                if (e?.isIntersecting) {
                    console.log('hi');
                } else {
                    console.log();
                }
            });
            observer.observe(secondSectionRef.current);
        }
    }, []);

    return (
        <section id="second-section" className="second-section">
            <p ref={secondSectionRef} className="second-section-font">
                내 희귀동물들을 한눈에 모아보고 한 곳에서 관리하세요.
                <br />
                쉽고 간편하게 다이어리를 관리하고 일상을 공유,
                <br />
                크롤과 함께해요
            </p>
        </section>
    );
}
