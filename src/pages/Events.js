import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    // if (data.isError) {
    //     return <p>{data.message}</p>
    // }

    return (
        <>
            <EventsList events={data.events} />
        </>
    );
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Could not load events'}), {status: 500})
    } else {
        return response;
    }
}