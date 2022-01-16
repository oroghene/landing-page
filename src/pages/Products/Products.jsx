import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjFour, homeObjThree, homeObjTwo } from './data';

const Products = () => {
    return (
        <>
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <Pricing />
        </>
    )
}

export default Products
