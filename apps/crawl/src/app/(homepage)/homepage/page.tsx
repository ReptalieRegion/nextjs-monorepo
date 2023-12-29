'use client';
import Image from 'next/image';
import Link from 'next/link';
import appleKorea from '../../../../public/images/applekorea.png';
import comment from '../../../../public/images/comment.png';
import community from '../../../../public/images/community.png';
import diary from '../../../../public/images/diary.png';
import googlePlay from '../../../../public/images/googleplay.png';

export default function Homepage() {
    return (
        <main>
            <section className="first-section__image">
                <div className="first-section__content">
                    <h1 className="first-section__font">
                        희귀동물 관리를
                        <br />
                        크롤에서 쉽고 간편하게
                    </h1>
                    <div className="first-section__app_store">
                        <Link
                            className="p-button p-button__font p-button__padding p-button__layout"
                            aria-disabled="false"
                            href=""
                            rel="noreferrer noopener"
                        >
                            <Image
                                src={appleKorea}
                                alt="apple store button"
                                height="24"
                                width="24"
                                className="p-button__left"
                            />
                            App Store
                        </Link>
                        <Link
                            className="p-button p-button__font p-button__padding p-button__layout"
                            aria-disabled="false"
                            href=""
                            rel="noreferrer noopener"
                        >
                            <Image src={googlePlay} alt="google play store" height="24" width="24" className="p-button__left" />
                            Google Play
                        </Link>
                    </div>
                </div>
                <a className="first-section__arrow_bottom_btn" href="#second-section">
                    <div className="first-section__arrow_bottom">
                        <svg width="50" height="50" viewBox="0 0 190 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 8L94 48.5L182 8"
                                stroke="#DCDCDC"
                                strokeWidth="15"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </a>
            </section>
            <section id="second-section" className="second-section">
                <p className="second-section-font">
                    내 희귀동물들을 한눈에 모아보고 한 곳에서 관리하세요.
                    <br />
                    쉽고 간편하게 다이어리를 관리하고 일상을 공유,
                    <br />
                    크롤과 함께해요
                </p>
            </section>
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
            <section id="fourth-section" className="fourth-section">
                <div id="fourth-section-content" className="section__wrapper">
                    <div className="section-text__wrapper">
                        <h1 id="fourth-h1" className="section-h1-font">
                            다이어리
                        </h1>
                        <h2 className="section-h2-font">
                            나의 희귀동물,
                            <br />
                            쉽게 관리하고
                            <br />
                            메모 해요
                        </h2>
                    </div>
                    <div className="fourth-section__image_wrapper">
                        <Image src={diary} alt="캘린더 이미지" id="fourth-section-image" className="fourth-section__image" />
                    </div>
                </div>
            </section>
        </main>
    );
}
