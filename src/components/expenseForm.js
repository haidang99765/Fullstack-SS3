const expenseForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Description:
                        <input type="text"/>
                    </label>
                </div>
                <div>
                    <label>
                        Price:
                        <input type="number"/>
                    </label>
                </div>
                <div>
                    <label>
                        Date:
                        <input type="date"/>
                    </label>
                </div>
                <div>
                    <button type="submit">Add</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default expenseForm;