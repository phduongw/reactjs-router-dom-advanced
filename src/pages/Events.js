import React from 'react';
import {Link} from "react-router-dom";

const DUMMY_EVENTS = [{
    id: 'p1',
    title: 'Some event 1'
}, {
    id: 'p2',
    title: 'Some event 2'
}, {
    id: 'p3',
    title: 'Some event 3'
}, {
    id: 'p4',
    title: 'Some event 4'
}]

const EventsPage = () => {
    return (
        <div>
            <ul>
                { DUMMY_EVENTS.map(event => (
                    <li key={event.id}>
                        <Link to={`${event.id}`}>{event.title}</Link>
                    </li>
                )) }
            </ul>
        </div>
    );
};

export default EventsPage;
