import { PropTypes } from "prop-types";
import { api } from "../../api";

import { EventItem } from "./EventItem";
import { useEventsData } from "../../hooks/useEventsData";
import { useEffect } from "react";

export const Events = ({ searchEvent }) => {
  const { events, loading } = useEventsData({searchEvent});

  const handleGetEvents = async () => {
    try {
      const resp = await api.get(`/events.json`);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getEvents = async() => {
      await handleGetEvents()
    }

    getEvents()
  }, []);

  if (loading) {
    return <div>Cargando...</div>
  }

  return (
    <div className="w-full max-w-screen-lg flex flex-col gap-2 mx-auto px-4 py-4 lg:px-0">
      {events.length > 0 ? (
        events.map((event) => (
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