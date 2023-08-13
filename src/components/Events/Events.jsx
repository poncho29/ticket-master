import { useState, useEffect, useMemo } from "react";
import { PropTypes } from "prop-types";

import { EventItem } from "./EventItem";

import data from '../../assets/data/events.json';

const initialState = data._embedded.events.map((event) => ({
  id: event.id,
  name: event.name,
  info: event.info,
  image: event.images[0].url
}));

export const Events = ({ searchEvent }) => {
  const [loading, setLoading] = useState(true);
const [events, setEvents] = useState(initialState);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setEvents(events);
    }, [1000])
  }, [events]);

  const filteredEvents = useMemo(() => {
    let cloneEvents = [...events];

    if (searchEvent && searchEvent.length > 0) {
      cloneEvents = cloneEvents.filter(event => 
        event.name.toLowerCase().includes(searchEvent.toLowerCase())
      )

      return cloneEvents;
    }
    return cloneEvents;
  }, [events, searchEvent])

  if (loading) {
    return <div>Cargando...</div>
  }

  return (
    <div>
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            onViewEvent={(id) => console.log(id)}         
          />
        ))
      ) : (
        <span>No hay eventos disponibles</span>
      )
    }
    </div>
  );
}

Events.propTypes = {
  searchEvent: PropTypes.string
}