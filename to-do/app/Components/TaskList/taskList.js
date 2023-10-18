import Task from "./task";

export default function TaskList(props){
    
    const out = []

    console.log(props.data)
    props.data.forEach(element => {
        out.push(
            <Task
                id={element.id}
                isCompleated={element.isCompleated}
                task={element.task}
                onButtonClick={props.onButtonClick}
                checkHandler={props.checkHandler}
            />
        )
    });
    
    return(
        <>
        {out}
        </>
    )
}