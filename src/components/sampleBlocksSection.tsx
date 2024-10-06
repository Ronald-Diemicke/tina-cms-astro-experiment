import React from 'react'
import type {PageQuery, PageQueryVariables} from '../../tina/__generated__/types'
import SampleBlock from './sampleBlock.tsx'

interface Props {
    tinaProps: {
        variables: PageQueryVariables;
        data: PageQuery;
        query: string;
    };
}

export default function sampleBlocksSection ({ tinaProps }: Props) {
    return (
        <>
            <div>block section</div>
            {tinaProps.data.page.sampleBlocksSection
                ? tinaProps.data.page.sampleBlocksSection.map(function (blockData, i) {
                    switch (blockData.__typename) {
                        case 'PageSampleBlocksSectionSampleBlock':
                            return (
                                <React.Fragment key={i + blockData.__typename}>
                                    <SampleBlock tinaProps={blockData}/>
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