import { PropTypes } from "prop-types";

import { EventItem } from "./EventItem";
import { useEventsData } from "../../hooks/useEventsData";

export const Events = ({ searchEvent }) => {
  const { events, loading } = useEventsData({searchEvent});

  if (loading) {
    return <div>Cargando...</div>
  }

  return (
    <div className="w-100 max-w-screen-lg flex flex-col gap-2 mx-auto py-4">
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