export default function Task(props){
    return(
        <div className="card">
            <div className="card-body">
                <input 
                    type="checkbox" 
                    id={props.id} 
                    checked={props.isCompleated ? "checked" : ""}
                    onChange={props.checkHandler} 
                />
                <p className="card-text">{props.task}</p>
                <button 
                    id={props.id}
                    onClick={props.onButtonClick}
                >
                    X
                </button>
            </div>
        </div>
    )
}

/*
        id: props.time,
        task: props.task,
        isCompleated: props.isCompleated
*/