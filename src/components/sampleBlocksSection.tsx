import React from 'react';
import type {PageQuery, PageQueryVariables} from '../../tina/__generated__/types';
import SampleBlock from './sampleBlock.tsx';
import { useTina, tinaField } from "tinacms/dist/react";

interface Props {
    tinaProps: {
        variables: PageQueryVariables;
        data: PageQuery;
        query: string;
    };
}

export default function sampleBlocksSection ({ tinaProps }: Props) {
    const { data } = useTina({
        variables: tinaProps.variables,
        data: tinaProps.data,
        query: tinaProps.query
    });

    const { page} = data;

    return (
        <>
            {page.sampleBlocksSection
                ? page.sampleBlocksSection.map(function (blockData, i) {
                    switch (blockData.__typename) {
                        case 'PageSampleBlocksSectionSampleBlock':
                            return (
                                <React.Fragment key={i + blockData.__typename}>
                                    <SampleBlock data-tina-field={tinaField(page, 'sampleBlocksSection')} tinaProps={blockData}/>
                                </React.Fragment>
                            )
                        default:
                            return null
                    }
                })
                : null}
        </>
    )
}