import React from 'react';
import { Link, useParams } from "react-router-dom";

const EventDetailPage = () => {
    const { eventId} = useParams();

    return (
        <div>
            <h1>Event Detail Page</h1>
            <p>EventID: {eventId}</p>
            <Link to='..' relative="path">Back to previous page</Link>
        </div>
    );
};

export default EventDetailPage;
