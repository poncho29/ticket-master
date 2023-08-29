import { PropTypes } from "prop-types";

export const EventItem = ({ event, onViewEvent }) => {
  const handleSeeMoreEvent = (e) => {
    e.stopPropagation();
    onViewEvent(event.id);
  }

  return (
    <div className="w-full h-auto flex flex-col border border-slate-300 md:h-40 md:flex-row">
      <figure className="w-full md:w-3/12">
        <img
          src={event.images[0].url}
          alt={event.name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="w-full flex flex-col gap-4 px-4 py-4 md:w-9/12">
        <h4 className="font-medium">{event.name}</h4>
        {event.info && (
          <p className="h-20 overflow-y-scroll">{event.info}</p>
        )}
        <button
          type="button"
          className=" w-full h-7 text-white rounded-md bg-slate-600 md:w-20 md:ml-auto"
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
    images: PropTypes.array.isRequired
  }),
  onViewEvent: PropTypes.func
}