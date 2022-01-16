import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjFour } from './data';

const Services = () => {
    return (
        <>
            <Pricing />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Services
