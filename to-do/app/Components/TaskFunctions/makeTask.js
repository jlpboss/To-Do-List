export default function makeTask(props){
    return{
        id: props.time,
        task: props.task,
        isCompleated: props.isCompleated
    }
}