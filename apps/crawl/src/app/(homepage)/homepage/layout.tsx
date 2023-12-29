'use server';

import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
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
            <main>{children}</main>
            <footer className="p-footer">
                <div className="p-footer__inner">
                    <address className="p-footer__address">
                        <strong className="p-logo">CRAWL</strong>
                        <br />
                        앱: CRAWL | 대표자: OOO
                        <br />
                        연락처: 010-0000-0000
                        <br />
                        Copyright 2023, CRAWL, All rights reserved.
                    </address>
                </div>
            </footer>
        </>
    );
}
