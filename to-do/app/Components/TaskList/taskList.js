import Task from "./task";

export default function TaskList(props){
    
    const out = []

    props.data.forEach(element => {
        out.push(
            <div key={element.id}>
                <Task
                    key={element.id}
                    id={element.id}
                    isCompleated={element.isCompleated}
                    task={element.task}
                    onButtonClick={props.onButtonClick}
                    checkHandler={props.checkHandler}
                />
            </div>
        )
    });
    
    return(
        <div className="contaner">
            {out}
        </div>
    )
}