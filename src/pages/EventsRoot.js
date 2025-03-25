import React from 'react';
import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

const EventsRoot = () => {
    // const navigation = useNavigation();

    return (
        <>
            <EventsNavigation />
            <main>
                {/*{ navigation.state === 'loading' && <p>Loading....</p> }*/}

                <Outlet />
            </main>
        </>
    );
};

export default EventsRoot;
