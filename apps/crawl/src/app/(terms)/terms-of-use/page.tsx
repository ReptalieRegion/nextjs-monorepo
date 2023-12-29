'use server';

import { Terms } from '../../../components/Terms';
import styles from '../styles.module.css';
import { data } from './constants';

export default async function TermsOfUse() {
    return (
        <main className={styles.wrapper}>
            <Terms data={data} />
        </main>
    );
}
