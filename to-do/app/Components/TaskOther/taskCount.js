export default function TaskCount(props){
    return(
        <div className="contaner">
            <h3>There are {props.remaining} Task(s) Remaining.</h3>
        </div>
    )
}