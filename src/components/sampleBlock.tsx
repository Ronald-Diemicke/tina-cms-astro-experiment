import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { type PageQuery, type PageQueryVariables} from "../../tina/__generated__/types.ts";
import  {type PagePartsFragment} from "../../tina/__generated__/types.ts";

interface Props {
    tinaProps: {
        title: string;
        text: string;
    };
}

export default function sampleBlock({ tinaProps }: Props) {
    return (
        <>
            <h2>{tinaProps.title}</h2>
            <h2>{tinaProps.text}</h2>
        </>
    );
};