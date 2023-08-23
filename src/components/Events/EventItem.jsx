import { PropTypes } from "prop-types";

export const EventItem = ({ event, onViewEvent }) => {
  const handleSeeMoreEvent = (e) => {
    e.stopPropagation();
    onViewEvent(event.id);
  }

  return (
    <div className="w-100 h-32 flex border border-orange-800">
      <div className="w-32">
        <img
          src={event.image}
          alt={event.name}
          className="w-full object-cover"
        />
      </div>
      <div>
        <h4>{event.name}</h4>
        <p>{event.info}</p>
        <button
          type="button"
          onClick={handleSeeMoreEvent}
        >
          Ver más
        </button>
      </div>
    </div>
  )
}

EventItem.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string,
    info: PropTypes.string,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  onViewEvent: PropTypes.func
}