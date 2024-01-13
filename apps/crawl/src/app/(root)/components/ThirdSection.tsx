'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import comment from '../../../../public/images/comment.png';
import community from '../../../../public/images/community.png';

export default function ThirdSection() {
    const thirdSectionRef = useRef<HTMLDivElement>(null);
    const imageWrapperRef = useRef<HTMLDivElement>(null);
    const [contentClassName, setSectionClassName] = useState('section__wrapper')
    const [rightImageClassName, setRightImageClassName] = useState("third-section__right_image");
    const [leftImageClassName, setLeftImageClassName] = useState("third-section__left_image");

    useEffect(() => {
        const handleScroll = () => {
            const targetElement = thirdSectionRef.current;

            if (targetElement) {
                const elementRect = targetElement.getBoundingClientRect();
                const scrollTop = window.scrollY || document.documentElement.scrollTop;

                const isOverScroll = elementRect.top < scrollTop;

                if (isOverScroll) {
                    setSectionClassName('section__wrapper section__text-wrapper-animation')
                    setRightImageClassName('third-section__right_image third-section__right_image_animation');
                    setLeftImageClassName('third-section__left_image third-section__left_image_animation');
                    window.removeEventListener('scroll', handleScroll);
                }
            }
        };

        const handleScrollImageWrapper = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollBottom = scrollTop + innerHeight
    
            const imageElement = imageWrapperRef.current;
            if (imageElement) {
                const thirdLeftImageBottom = window.scrollY + imageElement.getBoundingClientRect()?.bottom;
                if (innerWidth <= 768 && thirdLeftImageBottom <= scrollBottom + 100) {
                    const moveX = Math.max(0, Math.min(1, 100 / (scrollBottom + 100 - thirdLeftImageBottom)));
                    imageElement.style.transform = `translate3d(calc(((650px - 100vw) * ${moveX}) - (650px - 100vw)), 0px, 0px)`;
                } else if (innerWidth < 768) {
                    imageElement.style.transform = '';
                }
            }
        }


        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScrollImageWrapper);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScrollImageWrapper);
        };
    }, []);

    return (
        <section ref={thirdSectionRef} className="third-section">
            <div id="third-section-content" className={contentClassName}>
                <div className="section-text__wrapper">
                    <h1 className="section-h1-font">일상 공유</h1>
                    <h2 className="section-h2-font">
                        나의 하루,
                        <br />
                        주변 사람들과
                        <br />
                        일상을 공유 해요
                    </h2>
                </div>
                <div ref={imageWrapperRef} id="third-section-image" className="third-section__image_wrapper">
                    <div id="third-section-right-image" className={rightImageClassName}>
                        <Image src={comment} alt="댓글 이미지" id="right-image" className="third-section__image" fill />
                    </div>
                    <div id="third-section-left-image" className={leftImageClassName}>
                        <Image src={community} alt="커뮤니티 이미지" id="left-image" className="third-section__image" fill />
                    </div>
                </div>
            </div>
        </section>
    );
}
