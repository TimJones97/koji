import React from 'react';
import { JobBanner, BannerImg, BannerText } from '@dospore/job-board'
const HiringBanner = () => {
    return (
        <JobBanner>
            <BannerImg style={{ marginBottom: '-5px'}} src="/hiring-banner.png" alt='Hiring Banner'/>
            <BannerText>
                <span style={{ color: '#fff'}}>
                    Careers
                </span>
            </BannerText>
        </JobBanner>
    )
}




export default HiringBanner;