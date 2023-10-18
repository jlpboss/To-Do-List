
export default function TaskInput(props){

    return(
        <>
            <input
                value={props.inputVal}
                onChange={props.handleInputChange}
            />
            <button 
                onClick={props.onButtonClick}
            >
                Click to add Task
            </button>
        </>
    )
}