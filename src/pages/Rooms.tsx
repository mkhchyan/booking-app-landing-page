import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import Banner from '../components/Hero/Banner';
import Cover from '../components/Hero/Cover';
// import RoomsContainer from '../containers/RoomsContainer';

const Rooms: FC = () => {
    return (
        <>
        <Cover coverClass="roomsHero">
            <Banner 
            title="our rooms"
            >
            <Link to="/" className="btn-primary">return home</Link>
            </Banner>
        </Cover>
        {/* <RoomsContainer /> */}
        </>
    )
}

export default Rooms;
