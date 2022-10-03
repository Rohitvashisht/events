import {useRouter} from 'next/router';
import { Fragment } from 'react';
import ErrorPage from '../404';
import {getFilteredEvents} from '../../dummyData';
import ResultsTitle from '../../components/events/results-title';
import EventList from '../../components/events/event-list';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert'; 

function FilteredEventPage(){
    const router = useRouter();

    const filterData = router.query.slug;

    if(!filterData){
        return <p className="center">Loading.....</p>
    }

    const filterYear = filterData[0];
    const filterMonth = filterData[1];

    const numYear = parseInt(filterYear);
    const numMonth = parseInt(filterMonth);

    if(isNaN(numYear) || isNaN(numMonth)){
        return <ErrorAlert> Page Not Found !!! </ErrorAlert>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: filterMonth
    })

    if(!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert> 
                    <p>No Events found from the choosen filter!!! </p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        )
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <div>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </div>
    )
}

export default FilteredEventPage;