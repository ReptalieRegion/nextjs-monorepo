import { TermsListType } from './types';

export default function TermsList({ list }: Pick<TermsListType, 'list'>) {
    return (
        <ol>
            {list.map(({ children, contents }) => {
                return (
                    <li key={contents}>
                        {contents}
                        {!!children?.contents && (
                            <ol>
                                {children.contents.map((secondeContents) => (
                                    <li key={secondeContents}>{secondeContents}</li>
                                ))}
                                {!!children.children && (
                                    <ol>
                                        {children.children.contents.map((thirdContents) => (
                                            <li key={thirdContents}>{thirdContents}</li>
                                        ))}
                                    </ol>
                                )}
                            </ol>
                        )}
                    </li>
                );
            })}
        </ol>
    );
}
