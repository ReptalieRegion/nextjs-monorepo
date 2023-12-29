interface TermsTitleType {
    type: 'title';
    title: string;
}

interface TermsArticleTitleType {
    type: 'article-title';
    title: string;
}

interface TermsContentsType {
    type: 'contents';
    contents: string;
}

interface TermsEffectiveDateType {
    type: 'effective-date';
    date: string;
}

interface TermsListType {
    type: 'list';
    list: {
        contents: string;
        children?: {
            contents: string[];
            children?: {
                contents: string[];
            };
        };
    }[];
}

interface TermsArticle {
    type: 'article';
    articleContents: (TermsArticleTitleType | TermsContentsType | TermsListType)[];
}

type TermsData = TermsArticle | TermsEffectiveDateType | TermsTitleType;

export type { TermsArticle, TermsContentsType, TermsData, TermsEffectiveDateType, TermsListType, TermsTitleType };
