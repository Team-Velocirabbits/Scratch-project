import React, { useState, useEffect } from 'react';
import Event from './Event.jsx';

export default function EventsFeed (props) {
	let events = [];
	//creates events for each event in feed
	if (props.events && Object.keys(props.events).length > 0) {
		events = props.events.map((event, index) => {
			return (
				<Event
					{...event}
					userUpdate={props.userUpdate}
					key={`EventsFeed${index}`}
					// Functionality for removing events
					addEvent={props.addEvent}
					user={props.user}
					id={index}
					setEvents={props.setEvents}
					events={props.events}
				/>
			);
		});
	}
	return <div className='events'>{events}</div>;
}
