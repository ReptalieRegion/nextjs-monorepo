'use server';

import { Metadata } from 'next';
import Image from 'next/image';
import { PropsWithChildren } from 'react';
import logo from '../../../public/images/logo.png';
import './styles.css';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: '크롤 - 희귀동물 커뮤니티',
        description: '개코 | 도마뱀 | 뱀 | 거북 | 양서류 | 절지류 등 희귀동물 커뮤니티',
        category: '파충류 커뮤니티',
        appLinks: {},
        keywords: ['커뮤니티', '파충류', '거북이', '다이어리', '희귀동물', '게코', '도마뱀', '뱀', '양서류', '절지류'],
    };
}

export default async function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <header id="header" className="p-header__layout p-header_font">
                <div className="header-wrapper">
                    <p>CRAWL</p>
                    <a className="app_download_btn">앱 다운로드</a>
                </div>
            </header>
            <main>{children}</main>
            <footer className="p-footer">
                <div className="p-footer__inner">
                    <address className="p-footer__address">
                        <div className='p-logo_wrapper'>
                            <Image src={logo} alt='로고' />
                            <strong className="p-logo">CRAWL</strong>
                        </div>
                        <br/>어플명: CRAWL
                        <br />이름: 박윤찬
                        <br />연락처: 010-4024-3752
                        <br />Copyright 2023, CRAWL, All rights reserved.
                    </address>
                </div>
            </footer>
        </>
    );
}
