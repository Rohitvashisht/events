import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummyData';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage(){
    const router = useRouter();

    const event = getEventById(router.query.eventsId);
    
    if(!event){
        return(
            <Fragment>
                <ErrorAlert>
                    <p> No Events Found ! </p>
                </ErrorAlert>    
            </Fragment>
        )
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics 
                date={event.date} 
                address={event.location} 
                image={event.image} 
                imageAlt={event.title}
            />
            <EventContent>{event.description}</EventContent>
        </Fragment>
    )
}

export default EventDetailPage;