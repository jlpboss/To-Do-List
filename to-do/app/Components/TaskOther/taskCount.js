export default function TaskCount(props){
    return(
        <div className="contaner">
            <div className="d-flex align-items-center justify-content-around">
                <h3>There are {props.remaining} Task(s) Remaining.</h3>
            </div>
        </div>
    )
}