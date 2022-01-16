import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './data';

const HomePage = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <Pricing />
        </>
    )
}

export default HomePage
