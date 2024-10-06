import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type {PageQuery, PageQueryVariables} from "../../tina/__generated__/types.ts";

interface Props {
    tinaProps: {
        variables: PageQueryVariables;
        data: PageQuery;
        query: string;
    };
}

export default function titleComponent({ tinaProps }: Props) {
    const { data } = useTina({
        variables: tinaProps.variables,
        data: tinaProps.data,
        query: tinaProps.query
    });

    const {page} = data;

    return (
        <>
            <h1 data-tina-field={tinaField(page, 'title')}>{page.title}</h1>
            <div data-tina-field={tinaField(page, 'body')}>
                <TinaMarkdown content={page.body}/>
            </div>
        </>
    );
};