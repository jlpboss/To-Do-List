import Btn from "../General/btn"

export default function Task(props){
    return(
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                    <input 
                        type="checkbox" 
                        id={props.id} 
                        checked={props.isCompleated ? "checked" : ""}
                        onChange={props.checkHandler} 
                    />
                    <p className="card-text">{props.task}</p>
                    <Btn
                    id={props.id}
                    text={"X"}
                    onButtonClick={props.onButtonClick}
                    type={"button"}
                    name={"end task"}
                    />
                </div>
            </div>
        </div>
    )
}

/*
        id: props.time,
        task: props.task,
        isCompleated: props.isCompleated
*/