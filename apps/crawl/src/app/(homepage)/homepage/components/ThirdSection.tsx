'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import comment from '../../../../public/images/comment.png';
import community from '../../../../public/images/community.png';

export default function ThirdSection() {
    const thirdSectionRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (thirdSectionRef.current) {
            const observer = new IntersectionObserver(([e]) => {
                if (e?.isIntersecting) {
                    console.log('hi');
                } else {
                    console.log();
                }
            });
            observer.observe(thirdSectionRef.current);
        }
    }, []);

    return (
        <section className="third-section">
            <div id="third-section-content" className="section__wrapper">
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
                <div id="third-section-image" className="third-section__image_wrapper">
                    <div id="third-section-right-image" className="third-section__right_image">
                        <Image src={comment} alt="댓글 이미지" id="right-image" className="third-section__image" />
                    </div>
                    <div id="third-section-left-image" className="third-section__left_image">
                        <Image src={community} alt="커뮤니티 이미지" id="left-image" className="third-section__image" />
                    </div>
                </div>
            </div>
        </section>
    );
}
