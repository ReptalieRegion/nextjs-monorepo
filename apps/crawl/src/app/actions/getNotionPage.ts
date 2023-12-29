'use server';

import { NotionAPI } from 'notion-client';

const notion = new NotionAPI();

export async function getNotionPage(id: string) {
    const recordMap = await notion.getPage(id);
    return recordMap;
}
