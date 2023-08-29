import { useEffect, useMemo, useState } from 'react';

import data from '../assets/data/events.json';
import { getAllEvents } from '../services/events';

const initialState = data._embedded.events.map((event) => ({
  id: event.id,
  name: event.name,
  info: event.info,
  image: event.images[0].url
}));

export const useEventsData = ({searchEvent = ''}) => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState(initialState);

  useEffect(() => {
    const getEvents = async() => {
      const { data, error } = await getAllEvents();
      if (error) {
        setLoading(false);
        console.log(error);
      }

      console.log(data);
      setEvents(data._embedded.events);
      setLoading(false);
    }

    getEvents();
  }, []);

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

  return {
    loading,
    events: filteredEvents
  }
}