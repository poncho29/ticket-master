import { PropTypes } from "prop-types";

export const EventItem = ({ event, onViewEvent }) => {
  const handleSeeMoreEvent = (e) => {
    e.stopPropagation();
    onViewEvent(event.id);
  }

  return (
    <div>
      <img src={event.image} alt={event.name} />
      <h4>{event.name}</h4>
      <p>{event.info}</p>
      <button
        type="button"
        onClick={handleSeeMoreEvent}
      >
        Ver más
      </button>
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