import './expenseDate.css';
const expenseDate = (props) => {
    const {date} = props; //destructoring
    const year = props.date.getFullYear();
    const month = props.date.toLocaleDateString('en-US', {month: '2-digit'});
    const day = props.date.toLocaleDateString('en-US', {day: '2-digit'});
    return (
        <div className="expense-date">
            <div className="expense-date-year">{year}</div>
            <div className="expense-date-month">{month}</div>
            <div className="expense-date-day">{day}</div>
        </div>
    )
}

export default expenseDate;