import React from 'react';
import { PageHeaderContent } from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';

export const Resume = () => {
    return (
        <div>
            <PageHeaderContent
                headerText = "My resume"
                icon={<BsInfoCircleFill size={40}/>}
            />
        </div>
    )
}