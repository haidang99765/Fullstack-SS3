import {useState} from 'react';
import './expenseItem.css';
import expenseDate from './expenseDate';

const ExpenseItem = (props) => { //đây là JSX, các attribute được ghi thêm vào trong các thẻ custom HTML, custom HTML ở đây là thẻ <ExpenseItem/> thì sẽ gọi là prop, và các prop khi console.log ra thì sẽ ở dưới dạng object, hay nói cách khác, prop là 1 cách để chúng ta đẩy dữ liệu từ ngoài vào trong
    const [description, setDescription] = useState(props.description);
    const [backgroundColor, setBackgroundColor] = useState('')

    const changeDescription = () => {
        setDescription('New Description');
        console.log('Hello');
        setBackgroundColor('cyan')
    }
    return (
        <div className="expense-item" style={{
            backgroundColor: backgroundColor,
        }}> 
            <ExpenseItem date={props.date}/>
            <div className="expense-item-description">
                <button onClick={changeDescription}>Change Description</button>
                <h2>{description}</h2>
                <div className="expense-item-price">
                    ${props.price}
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default ExpenseItem;
//children kia là 1 prop đặc biệt, nếu custom HTML là không phải 1 thẻ tự đóng và ghi vào giữa thì sẽ được coi là prop children