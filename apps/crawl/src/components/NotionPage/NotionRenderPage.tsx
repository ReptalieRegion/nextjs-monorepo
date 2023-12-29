'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import type { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import 'react-notion-x/src/styles.css';
import './styles.css';

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code));
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection));
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then((m) => m.Equation));
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf));
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal));

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
                Link: (props: any) => <Link {...props} href={`/notion/${props.href}`} />,
                PageLink: (props: any) => <Link {...props} href={`/notion/${props.href}`} />,
                Image: Image,
            }}
        />
    );
}
