'use server';

import { Terms } from '@/components/Terms';
import { data } from './constants';

export default async function TermsOfUse() {
    return (
        <main>
            <Terms data={data} />
        </main>
    );
}
