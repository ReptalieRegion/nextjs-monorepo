'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import type { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code), {
    ssr: false,
});
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection), {
    ssr: false,
});
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then((m) => m.Equation), {
    ssr: false,
});
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf), {
    ssr: false,
});
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), {
    ssr: false,
});

type NotionPageProps = {
    recordMap: ExtendedRecordMap;
};

export default function NotionRenderPage({ recordMap }: NotionPageProps) {
    return (
        <NotionRenderer
            recordMap={recordMap}
            fullPage={true}
            darkMode={false}
            components={{
                Code,
                Collection,
                Equation,
                Modal,
                Pdf,
                Link: Link,
                Image: Image,
            }}
        />
    );
}
