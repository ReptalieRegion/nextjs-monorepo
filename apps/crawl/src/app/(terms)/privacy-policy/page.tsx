'use server';

import { Terms } from '@/components/Terms';
import { data } from './constants';

export default async function PrivacyPolicyPage() {
    return (
        <main>
            <Terms data={data} />
        </main>
    );
}
