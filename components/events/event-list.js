import EventItem from './event-item';
import classes from './event-list.module.css'

function EventList(props){
    const { items } = props;
    return (
        <ul className={classes.list}>
            {items?.map(event => {
                return (
                    <EventItem 
                        id={event.id}
                        image={event.image}
                        title={event.title}
                        location={event.location}
                        date={event.date}
                        key={event.id}
                    />
                )
            })}
        </ul>
    )
}

export default EventList;