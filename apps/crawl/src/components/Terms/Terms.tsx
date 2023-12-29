import TermsContents from './Contents';
import TermsList from './List';
import TermsTitle from './Title';
import { TermsData } from './types';

type TermsProps = {
    data: TermsData[];
};

export default function Terms({ data }: TermsProps) {
    return (
        <>
            {data.map((dataInfo, index) => {
                switch (dataInfo.type) {
                    case 'article':
                        return (
                            <section key={dataInfo.type + index}>
                                {dataInfo.articleContents.map((article) => {
                                    switch (article.type) {
                                        case 'article-title':
                                            return <TermsTitle label={article.title} />;
                                        case 'contents':
                                            return <TermsContents contents={article.contents} />;
                                        case 'list':
                                            return <TermsList list={article.list} />;
                                    }
                                })}
                            </section>
                        );
                    case 'effective-date':
                        return (
                            <p>
                                <strong>부칙</strong>
                                <br />
                                <strong key={dataInfo.type + index}>제1조 본 방침은 {dataInfo.date}부터 시행됩니다.</strong>
                            </p>
                        );
                    case 'title':
                        return <TermsTitle label={dataInfo.title} />;
                }
            })}
        </>
    );
}
