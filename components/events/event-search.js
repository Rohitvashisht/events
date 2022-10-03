import { useRef } from 'react';
import classes from './event-search.module.css';
import Button from '../ui/button';

function EventSearch(props){

    const yearInputRef = useRef(null);
    const monthInputRef = useRef(null);

    const submitHandler = (event) => {
        event.preventDefault();

        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        props.onSearch(selectedYear, selectedMonth);
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label className={classes.label} htmlFor="year">Year</label>
                    <select id="year" className={classes.select} ref={yearInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2021</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month" className={classes.label}>Month</label>
                    <select id="month" className={classes.select} ref={monthInputRef}>
                        <option value="1">January</option>
                        <option value="2">Feburary</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    )
}

export default EventSearch;