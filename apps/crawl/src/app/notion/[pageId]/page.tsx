'use server';

import { getNotionPage } from '@/app/actions/getNotionPage';
import NotionRenderPage from '@/components/NotionPage/NotionRenderPage';
import { Metadata, ResolvingMetadata } from 'next';
import { getPageTitle } from 'notion-utils';
import 'react-notion-x/src/styles.css';

type NotionPageProps = {
    params: {
        pageId: string;
    };
};

export async function generateMetadata({ params: { pageId } }: NotionPageProps, parent: ResolvingMetadata): Promise<Metadata> {
    const recordMap = await getNotionPage(pageId);
    const title = getPageTitle(recordMap);

    return {
        title,
        description: 'Crawl 공지사항',
    };
}

export default async function NotionPage({ params: { pageId } }: NotionPageProps) {
    const recordMap = await getNotionPage(pageId);

    return <NotionRenderPage recordMap={recordMap} />;
}